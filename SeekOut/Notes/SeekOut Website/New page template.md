```javascript

import Hero from '@/components/Hero'
import Head from 'next/head'
import PageSection from '@/components/PageSection'
import NextSteps from '@/components/NextSteps'
import Content from '@/components/Content'

import * as contentful from '@/lib/contentful'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export async function getStaticProps(context) {
    const client = context.preview 
    ? contentful.previewClient
    : contentful.client

    //Getting the Contentful content for the homepage by ID
    const id = '5SEVoJU5Rpkafl0Vh4FvnA' // update this ID to the landing page you want to pull content from
    const homepageContent = await client.getEntries({content_type: 'landingPage', 'sys.id': `${id}`, include: 3});

    return {
        props: {
            homepageContent: homepageContent.items,
            preview: context.preview || false,
        },
        revalidate: 900
    }
}

export default function homepage({ homepageContent, preview }) {
    const shareImage = homepageContent[0].fields.shareImage ? homepageContent[0].fields.shareImage.fields.file.url : "//seekout.com/api/og?type=video&title=" + homepageContent[0].fields.landingPageTitle;

    return (
        <>
        <Head>
            <title>{`${homepageContent[0].fields.landingPageTitle} | SeekOut`}</title>

            {/* if shareImage !== null add meta tag to change the OG image */}
            {shareImage !== null && (
                <meta property="og:image" content={`https:${shareImage}`} />
            )}
        </Head>
            <Hero
                head={homepageContent[0].fields.heroH1 } 
                prehead={homepageContent[0].fields.preheader}
                subhead={documentToReactComponents(homepageContent[0].fields.heroCopy)} 
                cta={homepageContent[0].fields.heroCta} 
                media={homepageContent[0].fields.heroMedia}
                mediaType="background"
                color="vanilla"
                announcement={homepageContent[0].fields.announcement}
            />
            
            {homepageContent[0].fields.contentSections.map(section => (
                <Content key={section.sys.id} section={section} options={{noPaddingBottom: true}} />
            ))}

            <PageSection color="linen" width="full">
                <NextSteps nextSteps={homepageContent[0].fields.nextSteps}/> 
            </PageSection>
        </>
    )
}

```