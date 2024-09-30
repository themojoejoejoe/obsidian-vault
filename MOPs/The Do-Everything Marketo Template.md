Marketo email templates are designed to be modular. This enables marketers to create pre-approved email designs without requiring technical or creative skills, and generally reduces the chances of human error in the email build process.

>[!tip] There are many templates, this one is mine
>Obviously there are a lot of styles you'll need to update, ranging from colors, logos, alt text, and a variety of other things. The ***STRUCTURE*** of the template is really what you're here for.

>[!warning] The perils of copy & paste
>If you copy and paste content from an MS Word doc or similar source, you'll *probably* unintentionally add formatting you don't want in the form of <span> tags. This can alter fonts, create unexpected highlights, or similar design issues that won't necessarily break the email, but they will look like obvious mistakes. To prevent this, Mac Users should right-click and select "paste & match style." For Windows users, you should pray to whatever fell spirits you worship to forgive you your transgressions. Failing that, there's probably a similar option, *or* you can simply click the HTML button and manually remove the extra <span> tags and their associated styles.

```
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]><xml>
 <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
<meta charset="UTF-8">
<meta name="x-apple-disable-message-reformatting">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">

<!-- START Marketo Variables -->

<!-- Global Variables-->
<meta class="mktoString" id="company_name" mktoName="SeekOut" default="" allowHtml="false">
<meta class="mktoColor" id="bg_colorgrey3" mktoName="Email BG Color" default="#f6f6f6">
<meta class="mktoColor" id="global_linkcolor" mktoName="Link Color" default="#9E00F0">
<meta class="mktoColor" id="global_fontcolor" mktoName="Font Color" default="#21003B">
<meta class="mktoColor" id="global_linkcolor_dm" mktoName="Link Color (DM)" default="#d8b3ff">
<meta class="mktoColor" id="global_btncolor_dm" mktoName="Btn Color (DM)" default="#e6d8ff">
<meta class="mktoColor" id="global_btntxtcolor_dm" mktoName="Btn Txt Color (DM)" default="#21003b">
<meta class="mktoNumber" id="body_margin" mktoName="Email Margin" default="10" min="1" max="100" units="px" step="1">
<meta class="mktoNumber" id="btn_radius" mktoName="Button Radius" default="48" min="0" max="50" units="px" step="1">
<meta class="mktoNumber" id="font_size" mktoName="Font Size" default="16" min="12" max="50" units="px" step="1">
<meta class="mktoList" id="font_fallback" mktoName="Font Fallback" values="Arial,Verdana,Helvetica,Tahoma,TimesNewRoman,Georgia,Garamond">
<meta class="mktoString" id="font_import" mktoname="Body Font Import"  default="@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');">
<meta class="mktoString" id="font_family" mktoname="Body Font Family"  default="'DM Sans', sans-serif">

<!-- Background Variables-->
<meta class="mktoString" id="bgImage600x300" mktoname="BG Img URL (600px Max Width)" mktomodulescope="true" default="https://picsum.photos/id/184/600/300.jpg">
<meta class="mktoColor" id="bg_colorwhite" mktoName="BG Color" default="#FFFFFF" mktoModuleScope="true">
<meta class="mktoColor" id="bg_colorltgrey" mktoName="BG Color" default="#f6f6f6" mktoModuleScope="true">
<meta class="mktoColor" id="bg_colorpurple" mktoName="BG Color" default="#4F0064" mktoModuleScope="true">
<meta class="mktoColor" id="bg_colorltgrey2" mktoName="BG Color" default="#ededed" mktoModuleScope="true">
<meta class="mktoColor" id="bg_colororange" mktoName="BG Color" default="#FF7D00" mktoModuleScope="true">
<meta class="mktoColor" id="bgnmbr" mktoName="BG Color" default="#d9d9d9" mktoModuleScope="true">


<!-- Content Variables-->
<meta class="mktoColor" id="divider_color" mktoName="Color" default="#f6f6f6" mktoModuleScope="true">
<meta class="mktoNumber" id="divider_thickness" mktoName="Height" default="1" min="1" max="40" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="divider_width" mktoName="Width" default="540" min="1" max="600" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="pad_top46" mktoName="Padding Top" default="46" min="0" max="100" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="pad_bot46" mktoName="Padding Bottom" default="46" min="0" max="100" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="pad_top30" mktoName="Padding Top" default="30" min="0" max="100" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="pad_bot30" mktoName="Padding Bottom" default="30" min="0" max="100" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="pad_top16" mktoName="Padding Top" default="16" min="0" max="100" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="pad_bot16" mktoName="Padding Bottom" default="16" min="0" max="100" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="pad_top8" mktoName="Padding Top" default="8" min="0" max="100" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="pad_bot8" mktoName="Padding Bottom" default="8" min="0" max="100" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="tagline_fontsize" mktoName="Tagline Size" default="16" min="12" max="30" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="headline_fontsize" mktoName="Headline Size" default="30" min="14" max="60" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="headline_lineheight" mktoName="Headline Line Height" default="30" min="14" max="60" units="px" step="1" mktoModuleScope="true">
<meta class="mktoBoolean" id="headline_weight" mktoName="Bold Headline?" default="false" false_value="normal" true_value="bold" false_value_name="No" true_value_name="Yes" mktoModuleScope="true">
<meta class="mktoColor" id="headline_color" mktoName="Headline Color" default="#FFFFFF" mktoModuleScope="true">
<meta class="mktoColor" id="subheadline_color" mktoName="Subheadline Color" default="#FFFFFF" mktoModuleScope="true">
<meta class="mktoNumber" id="hero-height300" mktoname="Section Height (px)" default="300" step="1" mktomodulescope="true">
<meta class="mktoNumber" id="hero-height250" mktoname="Section Height (px)" default="250" step="1" mktomodulescope="true">
<meta class="mktoNumber" id="hero-height225" mktoname="Section Height (px)" default="225" step="1" mktomodulescope="true">
<meta class="mktoNumber" id="hero-height200" mktoname="Section Height (px)" default="200" step="1" mktomodulescope="true">
<meta class="mktoNumber" id="hero-height120" mktoname="Section Height (px)" default="120" step="1" mktomodulescope="true">

<meta class="mktoBoolean" id="show_tagline" mktoName="Show Tagline?" default="true" false_value="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;" true_value="" false_value_name="No" true_value_name="Yes" mktoModuleScope="true">
<meta class="mktoBoolean" id="show_image" mktoName="Show image?" default="true" false_value="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;" true_value="" false_value_name="No" true_value_name="Yes" mktoModuleScope="true">
<meta class="mktoBoolean" id="show_headline" mktoName="Show Headline?" default="true" false_value="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;" true_value="" false_value_name="No" true_value_name="Yes" mktoModuleScope="true">
<meta class="mktoBoolean" id="show_subheadline" mktoName="Show Subheadline?" default="true" false_value="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;" true_value="" false_value_name="No" true_value_name="Yes" mktoModuleScope="true">
<meta class="mktoBoolean" id="show_textlink" mktoName="Show Text Link?" default="true" false_value="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;" true_value="" false_value_name="No" true_value_name="Yes" mktoModuleScope="true">
<meta class="mktoBoolean" id="show_cta" mktoName="Show Button?" default="true" false_value="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;" true_value="" false_value_name="No" true_value_name="Yes" mktoModuleScope="true">
<meta class="mktoList" id="lcr" mktoName="Align" values="left,center,right" default="left" mktoModuleScope="true">
<meta class="mktoList" id="clr" mktoName="Align" values="center,left,right" default="left" mktoModuleScope="true">
<meta class="mktoList" id="lc" mktoName="Align" values="center,left" mktoModuleScope="true">
<meta class="mktoList" id="mimgalign" mktoName="Img Mobile Align" values="left,center" mktoModuleScope="true">
<meta class="mktoBoolean" id="mimg100" mktoName="Mobile Img 100%?" default="false" false_value=" " true_value="mimg100" false_value_name="No" true_value_name="Yes" mktoModuleScope="true">

<!-- Button 1 Variables-->
<meta class="mktoColor" id="btn_bgcolor" mktoName="Btn BG Color" default="#9e00f0" mktoModuleScope="true">
<meta class="mktoColor" id="btn_bgcolororange" mktoName="Btn BG Color" default="#FF800C" mktoModuleScope="true">
<meta class="mktoColor" id="btn_bgcolorpurple" mktoName="Btn BG Color" default="#21003B" mktoModuleScope="true">
<meta class="mktoNumber" id="btn_txtsize" mktoName="Btn Font Size" default="16" min="10" max="30" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="btn_padtopbot" mktoName="Btn Pad Top/Bottom" default="12" min="0" max="32" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="btn_padlr" mktoName="Btn Pad Left/Right" default="22" min="0" max="52" units="px" step="1" mktoModuleScope="true">

<!-- Button 2 Variables-->
<meta class="mktoColor" id="btn2_bgcolor" mktoName="Btn2 BG Color" default="#ffffff" mktoModuleScope="true">
<meta class="mktoNumber" id="btn2_txtsize" mktoName="Btn2 Font Size" default="16" min="10" max="30" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="btn2_padtopbot" mktoName="Btn2 Pad Top/Bottom" default="12" min="0" max="32" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="btn2_padlr" mktoName="Btn2 Pad Left/Right" default="22" min="0" max="52" units="px" step="1" mktoModuleScope="true">

<!-- Button 3 Variables-->
<meta class="mktoColor" id="btn3_bgcolor" mktoName="Btn3 BG Color" default="#21003B" mktoModuleScope="true">
<meta class="mktoNumber" id="btn3_txtsize" mktoName="Btn3 Font Size" default="16" min="10" max="30" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="btn3_padtopbot" mktoName="Btn3 Pad Top/Bottom" default="12" min="0" max="32" units="px" step="1" mktoModuleScope="true">
<meta class="mktoNumber" id="btn3_padlr" mktoName="Btn3 Pad Left/Right" default="22" min="0" max="52" units="px" step="1" mktoModuleScope="true">



<!-- END Marketo Variables -->

<title>${company_name}</title>
<style>
/* START - WEBFONTS, ALWAYS use import method for email to avoid automation tracking issues */
${font_import}

@font-face {
    font-family: 'GT Alpina Md';
    src: url('https://info.seekout.com/rs/726-VHL-519/images/GTAlpina-MdIt.woff2') format('woff2'),
        url('https://info.seekout.com/rs/726-VHL-519/images/GTAlpina-MdIt.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'GT Alpina Md';
    src: url('https://info.seekout.com/rs/726-VHL-519/images/GTAlpina-Md.woff2') format('woff2'),
        url('https://info.seekout.com/rs/726-VHL-519/images/GTAlpina-Md.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'GT Alpina Rg';
    src: url('https://info.seekout.com/rs/726-VHL-519/images/GTAlpina-RgIt.woff2') format('woff2'),
        url('https://info.seekout.com/rs/726-VHL-519/images/GTAlpina-RgIt.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'GT Alpina Rg';
    src: url('https://info.seekout.com/rs/726-VHL-519/images/GTAlpina-Rg.woff2') format('woff2'),
        url('https://info.seekout.com/rs/726-VHL-519/images/GTAlpina-Rg.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

/* END - WEBFONTS, ALWAYS use import method for email to avoid automation tracking issues */

/* START - Universal styles */
    body {
        margin:${body_margin}; padding:0; font-family: ${font_fallback}, sans-serif; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em; -webkit-text-size-adjust: none; -ms-text-size-adjust: 100%;
    }
    .headlines {font-family:georgia, times, serif;}
img, a img {
    outline: none;
    text-decoration: none;
    border: none;
    -ms-interpolation-mode: bicubic;
}
.imgblock img {
    display: block;
}
.img100, .img100 img {
    width: 100% !important;
    height: auto !important;
}
p {
    margin-top: 0;
    padding-top: 0;
}
a {
    color: ${global_linkcolor};
}

/* END - Universal styles  */

/* START - Mobile universal styles */
@media screen and (max-width: 480px) {
body {
    margin: 0 !important;
    padding: 0;
}
.t100 {
    width: 100% !important;
    float: none !important;
}
.mimg100 img, .mimg100 {
    width: 100% !important;
    height: auto !important;
}
.mimg50 img, .mimg50 {
    width: 50% !important;
    height: auto !important;
}
.logoimg {
    max-width: 125px !important;
    height: auto !important;
}
.text-center {
    text-align: center !important;
}
.heightauto {
    height: auto !important;
}
.herowidth {
    width: 90% !important;
}
.column {
    display: block !important;
    width: 100% !important;
}
.p0 {
    padding: 0 !important;
}
.pt5 {
    padding-top: 5px !important;
}
.pr5 {
    padding-right: 5px !important;
}
.pb5 {
    padding-bottom: 5px !important;
}
.pl5 {
    padding-left: 5px !important;
}
.pt10 {
    padding-top: 10px !important;
}
.pr10 {
    padding-right: 10px !important;
}
.pb10 {
    padding-bottom: 10px !important;
}
.mb10 {
    margin-bottom: 10px !important;
}
.pl10 {
    padding-left: 10px !important;
}
.p15 {
    padding: 16px !important;
}
.pt15 {
    padding-top: 16px !important;
}
.pr15 {
    padding-right: 16px !important;
}
.pb15 {
    padding-bottom: 16px !important;
}
.pl15 {
    padding-left: 16px !important;
}
.pt20 {
    padding-top: 20px !important;
}
.pr20 {
    padding-right: 20px !important;
}
.pb20 {
    padding-bottom: 20px !important;
}
.pl20 {
    padding-left: 20px !important;
}
.pt30 {
    padding-top: 30px !important;
}
.pr30 {
    padding-right: 30px !important;
}
.pb30 {
    padding-bottom: 30px !important;
}
.pl30 {
    padding-left: 30px !important;
}
.plr15 {
    padding-left: 16px !important;
    padding-right: 16px !important;
}
.mpad {
    padding-left: 16px !important;
    padding-right: 16px !important;
}
    .cntrbtn {float: none !important; margin: 0 auto !important;}

  #BT-1-C{
    padding-left:16px;
  }
}


/* END - Mobile universal styles */

/* START - Webfont fix, keeps Outlook from rendering Times. Loads for all devices except Outlook. */
@media {
body {
font-family: ${font_family} !important;
}
    .headlines {
        font-family: 'GT Alpina Rg', serif !important;
    font-weight: normal;
    font-style: normal;
    }
}

/* END - Webfont fix, keeps Outlook from rendering Times. Loads for all devices except Outlook. */



/* START - Custom dark mode styles */
    @media (prefers-color-scheme: dark) {
        .cta, .bg td.cta {
            background-color: ${global_btncolor_dm} !important;
        }
        .cta a {
            color: ${global_btntxtcolor_dm} !important;
        }
        a {
            color: ${global_linkcolor_dm};
}
        .bg, .bg td {color:#FDF1E4 !important; background: #111111 !important;}
 		
      	.btn2 {
            background-color:#111111;
            border: 2px solid #b476f1;
            color: #b476f1;
        }
      
      	.container {
          	background-color:#111111;
           	color:#FDF1E4;
        }
    }
  
        [data-ogsc] .cta, [data-ogsc] .bg td.cta {
        background-color: ${global_btncolor_dm} !important;
        }
 		[data-ogsc] .cta a {
        color: ${global_btntxtcolor_dm} !important;
        }
        [data-ogsc] a {
        color: ${global_linkcolor_dm};
        }
		[data-ogsc] .container {
        background-color:#111111;
        color:#fdf1e4;
        }
       

    [data-ogsc] .bg, [data-ogsc] .bg td {color:#FDF1E4 !important; background: #111111 !important;}

/* END - Custom dark mode styles */



/* START - Custom mobile CSS */
@media screen and (max-width: 480px) {
}
/* END -  Custom mobile CSS */
</style>

<!--[if (gte mso 9)|(IE)]>
<style type="text/css">
table {
border-collapse: collapse;
border-spacing: 0; }
</style>
<![endif]-->
</head>

<body style="background: ${bg_colorgrey3}; min-width:100%;">
<table width="600" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" style="width:600px;">
  <tbody>
    <tr>
      <td id="wrapper" style="background: #ffffff; padding: 0;" class="mktoContainer container" mktoName="Container"><!-- START - ||||||| CONTAINER ||||||| -->



          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" mktoName="Logo w/ Button" id="l4">
          <tbody>
            <tr>
              <td style="background: ${bg_colorpurple};"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="L-4" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top30} 0 ${pad_bot30} 0;" class="mpad"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td><table width="165" style="width:165px; float: left;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                                  <tbody>
                                    <tr>
                                      <td style="text-align: center;" class="pb20"><div class="mktoImg" id="ksdf0w9e9" mktoImgSrc="https://info.seekout.com/rs/726-VHL-519/images/logopurple.png" mktoName="Image" mktoImgWidth="165" mktoLockImgSize="false" mktoImgClass="logoimg" mktoLockImgStyle="true" mktoImgLink=""> <a><img alt=""></a></div></td>
                                    </tr>
                                  </tbody>
                                </table><table width="300" style="width:300px; float: right; ${show_cta}" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                                  <tbody>
                                    <tr style="${show_cta}">
                                      <td style="${show_cta}"><table border="0" cellspacing="0" cellpadding="0" align="right" class="cntrbtn" style=" float: right; ${show_cta}">
                                          <tbody>
                                            <tr>
                                              <td align="center" class="cta mktoText" id="dklsd" mktoName="CTA Button" style="background-color:${btn_bgcolororange};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #21003B; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" mktoName="Logo w/o Button" id="l42">
          <tbody>
            <tr>
              <td style="background: ${bg_colorpurple};"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="L-42" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top30} 0 ${pad_bot30} 0;" class="mpad"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td><table width="165" style="width:165px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                                  <tbody>
                                    <tr>
                                      <td style="text-align: center;" class="pb20"><div class="mktoImg" id="ksdf0w9e92" mktoImgSrc="https://info.seekout.com/rs/726-VHL-519/images/logopurple.png" mktoName="Image" mktoImgWidth="165" mktoLockImgSize="false" mktoImgClass="logoimg" mktoLockImgStyle="true" mktoImgLink=""> <a><img alt=""></a></div></td>
                                    </tr>
                                  </tbody>
                                </table>
                            </td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" mktoName="Logo w/ Button" id="l4as" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colororange};">
                  <table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="Ldfs4" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top30} 0 ${pad_bot30} 0;" class="mpad">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td><table width="165" style="width:165px; float: left;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                                  <tbody>
                                    <tr>
                                      <td style="text-align: center;" class="pb20"><div class="mktoImg" id="kasdf0w9e9" mktoImgSrc="https://info.seekout.com/rs/726-VHL-519/images/Logo_Layers.png" mktoName="Image" mktoImgWidth="165" mktoLockImgSize="false" mktoImgClass="logoimg" mktoLockImgStyle="true" mktoImgLink=""> <a><img alt=""></a></div></td>
                                    </tr>
                                  </tbody>
                                </table>
                                  <table width="300" style="width:300px; float: right; ${show_cta}" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                                  <tbody>
                                    <tr style="${show_cta}">
                                      <td style="${show_cta}">
                                          <table border="0" cellspacing="0" cellpadding="0" align="right" class="cntrbtn" style="float: right; ${show_cta}">
                                          <tbody>
                                            <tr>
                                              <td align="center" class="cta mktoText" id="lskflk" mktoName="CTA Button" style="background-color:${btn_bgcolorpurple};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>


        <!-- START - Module HERO-BG -->

        <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="hero-bg" mktoName="Hero w/ BG Image" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td background="${bgImage600x300}" style="background: url(${bgImage600x300}) center ${bg_colorpurple}; background-size: cover;" bgcolor="${bg_colorpurple}" width="600" height="${hero-height225}" valign="top"><!--[if gte mso 9]>
  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:${hero-height225}px;">
    <v:fill type="frame" src="${bgImage600x300}" color="${bg_colorpurple}" />
    <v:textbox inset="0,0,0,0">
  <![endif]-->

                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td height="${hero-height225}" valign="middle" class="pt30 pb30"><table width="80%" border="0" align="center" cellpadding="0" cellspacing="0" class="herowidth">
                          <tbody>
                            <tr>
                              <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <tbody>
                                    <tr style="${show_headline}">
                                      <td style="font-size: 30px; padding-bottom: 20px; line-height:1.2em; text-align: ${lc}; color: ${headline_color}; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kdjgsdsfdsd9">Headline goes here lorem ipsum dolor sit.</td>
                                    </tr>
                                    <tr style="${show_subheadline}">
                                      <td style="font-size: 14px; line-height: 1.3em; padding-bottom: 20px; text-align: ${lc}; color: ${subheadline_color};" class="mktoText" mktoName="Subeadline" id="kdjgw0e9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</td>
                                    </tr>
                                    <tr style="${show_cta}">
                                      <td style="${show_cta}"><table border="0" cellspacing="0" cellpadding="0" align="${lc}" style="${show_cta}">
                                          <tbody>
                                            <tr>
                                              <td align="center" class="cta mktoText" id="dkdlsd" mktoName="CTA Button" style="background-color:${btn_bgcolororange};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #21003B; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table>

                <!--[if gte mso 9]>
    </v:textbox>
  </v:rect>
  <![endif]--></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module HERO-BG -->

        <!-- START - Module IMG-1 -->

        <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="img1" mktoName="Full-width Image" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="padding: 0;" class="mimg100"><div class="mktoImg" id="kdf929" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/1200x500.png" mktoName="Image" mktoImgWidth="600" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="display:block;" alt=""></a></div></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module IMG-1 -->

        <!-- START - Module IMG-2 -->

        <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="img2" mktoName="Padded Image" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td class="img100"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="padding: ${pad_top30} 30px ${pad_bot30} 30px;" class="p15"><div class="mktoImg" id="kdf99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/1200x500.png" mktoName="Image" mktoImgWidth="540" mktoLockImgSize="true" mktoImgClass="mimg100"  mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="display:block;border-radius:8px;" alt=""></a></div></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>


        <!-- START - Module Header Image Right -->

        <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="h-1" mktoName="Header Image Right" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="padding:  ${pad_top30} 0 ${pad_bot30} 30px; background:${bg_colorwhite}" class="mpad pt30 bg"><table width="540" style="width:540px;"  border="0" cellspacing="0" cellpadding="0" class="t100">
  <tbody>
    <tr>
      <td>
        <table width="250" style="width:250px; float:right;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
            <tbody>
              <tr>
                <td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"><div class="mktoImg" id="kdsdf99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/500x500.png" mktoName="Image" mktoImgWidth="250" mktoLockImgSize="true" mktoImgClass="mimg100"  mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="display:block;border-radius:8px;" alt=""></a></div></td>
              </tr>
            </tbody>
          </table>
        <table width="270" style="width:270px; float:left;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                  <tbody>
                    <tr>
                      <td height="${hero-height250}" class="heightauto pb20"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr style="${show_tagline}">
                              <td style="font-size: ${tagline_fontsize}; line-height: 1.2em; padding-bottom:8px;" class="mktoText" mktoName="Tagline" id="kdjgd9">Webinar</td>
                            </tr>
                            <tr style="${show_headline}">
                              <td style="font-size: ${headline_fontsize}; line-height: ${headline_lineheight}; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kdjgsd9">Headline goes here lorem ipsum dolor sit.</td>
                            </tr>
                            <tr style="${show_cta}">
                              <td style="padding-top: 16px; ${show_cta}"><table border="0" cellspacing="0" cellpadding="0" style="${show_cta}">
                                  <tbody>
                                    <tr>
                                      <td align="center" class="cta mktoText" id="dkldsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                            <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table>
                </td>
    </tr>
  </tbody>
</table>
</td>
            </tr>
          </tbody>
        </table>



        <!-- START - Module Header Image Left -->

        <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-1R" mktoName="Header Image Left" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="padding:  ${pad_top30} 0 ${pad_bot30} 30px; background: ${bg_colorwhite}" class="mpad pt30 bg"><table width="540" style="width:540px;"  border="0" cellspacing="0" cellpadding="0" class="t100">
  <tbody>
    <tr>
      <td>
        <table width="250" style="width:250px; float: left;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                  <tbody>
                    <tr>
                      <td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"><div class="mktoImg" id="kw56f99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/500x500.png" mktoName="Image" mktoImgWidth="250" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="display:block;border-radius:8px;" alt=""></a></div></td>
                    </tr>
                  </tbody>
                </table>
        <table width="270" style="width:270px; float:right;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                  <tbody>
                    <tr>
                      <td height="${hero-height250}" class="heightauto pb20"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr style="${show_tagline}">
                              <td style="font-size: ${tagline_fontsize}; line-height: 1.2em; padding-bottom:8px;" class="mktoText" mktoName="Tagline" id="kd5sdsd9">Webinar</td>
                            </tr>
                            <tr style="${show_headline}">
                              <td style="font-size: ${headline_fontsize}; line-height: ${headline_lineheight}; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kdjg45sd9">Headline goes here lorem ipsum dolor sit.</td>
                            </tr>
                            <tr style="${show_cta}">
                              <td style="padding-top:16px; ${show_cta}"><table border="0" cellspacing="0" cellpadding="0" style="${show_cta}">
                                  <tbody>
                                    <tr>
                                      <td align="center" class="cta mktoText" id="dalsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                            <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table>
                
                </td>
                    </tr>
                  </tbody></table></td>
            </tr>
          </tbody>
        </table>
          
          <!-- START - Module Small Header Image Right -->
        <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-1Rga" mktoName="Small Header Image Right" mktoAddByDefault="false">
            <tbody>
                <tr>
                <td style="padding:  ${pad_top30} 0 ${pad_bot30} 30px; background:${bg_colorwhite}" class="mpad pt30 bg">
                    <table width="540" style="width:540px;"  border="0" cellspacing="0" cellpadding="0" class="t100">
                        <tbody>
                            <tr>
                                <td>
                                    <table width="120" style="width:120px; float:right;" border="0" align="right" cellpadding="5" cellspacing="0" class="t100">
                                    <tbody>
                                        <tr>
                                        <td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"><div class="mktoImg" id="kdsdfd99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/240x240.png" mktoName="Image" mktoImgWidth="100" mktoLockImgSize="true" mktoImgClass="mimg50"  mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="border-radius:8px;" alt=""></a></div></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    <table width="400" style="width:400px; float:left;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                                        <tbody>
                                            <tr>
                                            <td height="${hero-height120}" class="heightauto pb20"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tr style="${show_headline}">
                                                <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kdw9e2">Short Headline in Alpina</td>
                                                </tr>
                                                <tr style="${show_subheadline}">
                                                <td style="padding-bottom:16px;" class="mktoText" id="sasdg2ed3" mktoName="Content">Body copy uses DM Sans. Please do not edit font size or line height.</td>
                                                </tr>
                                                <tr style="${show_textlink}">
                                                <td class="mktoText" id="skg222ed3" mktoName="Text Link"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                                                </tr>
                                                <tbody>
                                                    <!--[if gt mso 15]>
                        <tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
                        <![endif]-->
                                                </tbody>
                                                </table></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            </tbody>
        </table>

          <!-- START - Module Small Header Image Left -->

          <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="hasdf-1" mktoName="Small Header Image Left" mktoAddByDefault="false">
            <tbody>
                <tr>
                <td style="padding:  ${pad_top30} 0 ${pad_bot30} 30px; background:${bg_colorwhite}" class="mpad pt30 bg">
                    <table width="540" style="width:540px;"  border="0" cellspacing="0" cellpadding="0" class="t100">
                        <tbody>
                            <tr>
                                <td>
                                    <table width="120" style="width:120px; float:left;" border="0" align="left" cellpadding="5" cellspacing="0" class="t100">
                                        <tbody>
                                            <tr>
                                            <td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"><div class="mktoImg" id="kw56f9a9" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/240x240.png" mktoName="Image" mktoImgWidth="100" mktoLockImgSize="true" mktoImgClass="mimg50"  mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="border-radius:8px;" alt=""></a></div></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table width="400" style="width:400px; float:right;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                                        <tbody>
                                            <tr>
                                            <td height="${hero-height120}" class="heightauto pb20"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tr style="${show_headline}">
                                                <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kdw9e">Short Headline in Alpina</td>
                                                </tr>
                                                <tr style="${show_subheadline}">
                                                <td style="padding-bottom:16px;" class="mktoText" id="sasdg2ed2" mktoName="Content">Body copy uses DM Sans. Please do not edit font size or line height.</td>
                                                </tr>
                                                <tr style="${show_textlink}">
                                                <td class="mktoText" id="skg222ed2" mktoName="Text Link"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                                                </tr>
                                                <tbody>
                                                    <!--[if gt mso 15]>
                        <tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
                        <![endif]-->
                                                </tbody>
                                                </table></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                    </tbody>
                </table>
                </td>
            </tr>
          </tbody>
        </table>




          <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="hasdaf-1" mktoName="Small Header Image Right - Circle" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="padding:  ${pad_top30} 0 ${pad_bot30} 30px; background:${bg_colorwhite}" class="mpad pt30 bg"><table width="540" style="width:540px;"  border="0" cellspacing="0" cellpadding="0" class="t100">
  <tbody>
    <tr>
      <td>
        <table width="120" style="width:120px; float: right;" border="0" align="right" cellpadding="5" cellspacing="0" class="t100">
            <tbody>
              <tr>
                <td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"><div class="mktoImg" id="kdsdga99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/240x240.png" mktoName="Image" mktoImgWidth="100" mktoLockImgSize="true" mktoImgClass="mimg50"  mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="border-radius:200px;" alt=""></a></div></td>
              </tr>
            </tbody>
          </table>
        <table width="400" style="width:400px; float: left;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                  <tbody>
                    <tr>
                      <td height="${hero-height120}" class="heightauto pb20"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr style="${show_headline}">
                          <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kdwaf9e">Short Headline in Alpina</td>
                        </tr>
                        <tr style="${show_subheadline}">
                          <td style="padding-bottom:16px;" class="mktoText" id="sasdgg2ed2" mktoName="Content">Body copy uses DM Sans. Please do not edit font size or line height.</td>
                        </tr>
                        <tr style="${show_textlink}">
                          <td class="mktoText" id="skg222easdd2" mktoName="Text Link"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                        </tr>
                          <tbody>
                            <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table>
            </td>
    </tr>
  </tbody>
</table>
</td>
            </tr>
          </tbody>
        </table>




          <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="Hagdga" mktoName="Small Header Image Left - circle" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="padding:  ${pad_top30} 0 ${pad_bot30} 30px; background: ${bg_colorwhite}" class="mpad pt30 bg"><table width="540" style="width:540px;"  border="0" cellspacing="0" cellpadding="0" class="t100" align="left" style="float: left;">
  <tbody>
    <tr>
      <td>
        <table width="120" style="width:120px; float:left;" border="0" align="left" cellpadding="5" cellspacing="0" class="t100">
            <tbody>
              <tr>
                <td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"><div class="mktoImg" id="kw5ga6f9a9" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/240x240.png" mktoName="Image" mktoImgWidth="100" mktoLockImgSize="true" mktoImgClass="mimg50" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="border-radius:200px;" alt=""></a></div></td>
              </tr>
            </tbody>
          </table>
        <table width="400" style="width:400px; float: right;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                  <tbody>
                    <tr>
                      <td height="${hero-height120}" class="heightauto pb20"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr style="${show_headline}">
                              <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kdgadw9e2">Short Headline in Alpina</td>
                            </tr>
                            <tr style="${show_subheadline}">
                              <td style="padding-bottom:16px;" class="mktoText" id="sasdg2ead3" mktoName="Content">Body copy uses DM Sans. Please do not edit font size or line height.</td>
                            </tr>
                            <tr style="${show_textlink}">
                              <td class="mktoText" id="skg222aed3" mktoName="Text Link"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                            </tr>
                            <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table>
                </td>
                    </tr>
                  </tbody></table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module H-1R -->

        <!-- START - Module H-2 -->

        <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-2" mktoName="Header" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td class="bg" style="padding: ${pad_top46} 0 ${pad_bot46} 0; background: ${bg_colorwhite};" class="pt30 pb30 bg"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="t100">
                  <tbody>
                    <tr>
                      <td><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 pl15 pr15">
                          <tbody>
                            <tr style="${show_headline}">
                              <td style="font-size: 30px; line-height: 1.2em; padding-bottom: 16px; text-align: ${lcr}; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kdjgsdgsfssd9">Headline goes here lorem ipsum dolor sit.</td>
                            </tr>
                            <tr style="${show_subheadline}">
                              <td style="font-size: 14px; line-height: 1.3em; padding-bottom: 16px; text-align: ${lcr};" class="mktoText" mktoName="Subeadline" id="kdjaagw0e9">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                            </tr>
                            <tr style="${show_cta}">
                              <td style="${show_cta}"><table border="0" cellspacing="0" cellpadding="0" align="${lcr}" style="${show_cta}">
                                  <tbody>
                                    <tr>
                                      <td align="center" class="cta mktoText" id="dklsadd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module H-2 -->

        <!-- START - Module H-4 -->

        <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-4" mktoName="Simple Header" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="padding: ${pad_top30} 0 ${pad_bot8} 0; background: ${bg_colorwhite};" class="pt30 pb30 bg"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="t100">
                  <tbody>
                    <tr>
                      <td><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 pl15 pr15">
                          <tbody>
                            <tr>
                              <td style="font-size: 32px; line-height: 1.2em; text-align: ${lcr}; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="k56wegd9">Event Agenda</td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module H-4 -->


          <table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="HgdRga" mktoName="Agenda Item" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="padding:  ${pad_top30} 0 ${pad_bot30} 30px; background: ${bg_colorwhite}" class="mpad pt30 bg"><table width="540" style="width:540px;"  border="0" cellspacing="0" cellpadding="0" class="t100">
  <tbody>
    <tr>
      <td><table width="150" style="width:150px; float: left;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                  <tbody>
                    <tr>
                      <td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td style="border:1px solid #000000; border-radius:200px;  font-size: 14px; line-height: 1.2em; padding-top:3px padding-bottom:3px; text-align: center" id="algkdl" mktoName="Item Time" class="mktoText">00:00AM</td>
    </tr>
  </tbody>
</table>
</td>
                    </tr>
                  </tbody>
                </table><table width="360" style="width:360px; float: right;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                  <tbody>
                    <tr>
                      <td class="heightauto pb20"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td class="mktoText" id="sagad3" mktoName="Item Content" style="font-size: 16px; text-align: left; line-height: 1.2em;">Session Name plus some lorem if it gets long</td>
                            </tr>
                            <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table>
                </td>
                    </tr>
                  </tbody></table></td>
            </tr>
          </tbody>
        </table>

        <!-- START - Module BT-1-C -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="slkgodk" mktoName="Button" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="BT-1-C" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;"><table border="0" align="${clr}" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td align="center" class="cta mktoText" id="dklsdad" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module BT-1-C -->

        <!-- START - Module BT-2 -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="swkgodk" mktoName="Button x2" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="BT-2" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="padding: 0;"><table border="0" align="center" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
                                      <td align="center" class="cta mktoText" id="dkgdalsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                              <td style="padding: 0;"><table border="0" align="center" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
                                      <td align="center" class="btn2 mktoText" id="dklhsd" mktoName="CTA Button" style="background-color:${btn2_bgcolor};font-family:sans-serif;font-size:${btn2_txtsize};text-align:center;-webkit-text-size-adjust:none; border:2px solid #9e00f0; border-color:#9e00f0;padding: ${btn2_padtopbot} ${btn2_padlr} ${btn2_padtopbot} ${btn2_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #9e00f0; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module BT-2 -->

        <!-- START - Module CS-1 -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="slksdk" mktoName="Content Headline" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="CS-1" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="font-size: 24px; line-height: 1.2em; text-align: left; padding:  ${pad_top8} 0 ${pad_bot8} 0; font-weight: ${headline_weight};" class="mpad mktoText headlines" mktoName="Headline" id="kdjg56">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module CS-1 -->

        <!-- START - Module CS-2 -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="slkgsdg" mktoName="Content">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="CS-2" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top8} 0 ${pad_bot8} 0; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mpad mktoText" id="skgodkd" mktoName="Content">
                        <p>This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous. Listen to what is happening. The writing is getting boring. The sound of it drones. It's like a stuck record. The ear demands some variety.</p>
                        <p>Now listen. I vary the sentence length, and I create music. Music. The writing sings. It has a pleasant rhythm, a lilt, a harmony. I use short sentences. And I use sentences of medium length.</p>
                        <p>And sometimes, when I am certain the reader is rested, I will engage him with a sentence of considerable length, a sentence that burns with the energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals - sounds that say <a style="color:#9e00f0;text-decoration:none;font-weight:bold;" href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}">listen to this,</a> it is important. </p>
                        <ul>
                          <li>Risus commodo viverra maecenas accumsan lacus vel facilisis.</li>
                          <li>Risus commodo viverra maecenas accumsan lacus vel facilisi.</li>
                          <li>Risus commodo viverra maecenas accumsan lacus vel facilisi.</li>
                        </ul>
                        <p>Quis ipsum suspendisse ultrices gravida. </p></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module CS-2 -->

        <!-- START - Module CS-3 -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="slkw0e" mktoName="Content W/ Image" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="CS-3" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top16} 0 ${pad_bot16} 0; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mpad"><table border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td class="p0 pb30" style="text-align: center; padding: 0 0 5px 20px;"><table border="0" cellspacing="0" cellpadding="0" align="center">
                                  <tbody>
                                    <tr>
                                      <td><div class="mktoImg" id="kwg5sg" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/400x400.png" mktoName="Image" mktoImgWidth="200" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"><a><img style="display: block; z-index: 1000; border-radius:8px;"></a></div></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="mktoText" id="skgsdgkd" mktoName="Content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sendisse ultrices gravida. <a style="color:#9e00f0;text-decoration:none;font-weight:bold;" href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}">Hyperlink Style</a>. </p>
                          <ul>
                            <li>Risus commodo viverra maecenas accumsan lacus vel facilisis.</li>
                            <li>Risus commodo viverra maecenas accumsan lacus vel facilisi.</li>
                            <li>Risus commodo viverra maecenas accumsan lacus vel facilisi.</li>
                          </ul>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module CS-3 -->

        <!-- START - Module CS-4 -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="sw0eed" mktoName="2 Columns" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="CS-4" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;" class="mpad"><table width="255" style="width:255px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td height="200" class="heightauto"><table width="100%" border="0" align="left" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr class="t100">
                                      <td style="text-align: center; font-size: 14px; line-height: 1.2em; padding-bottom: 16px;"><div class="mktoImg" id="k5f99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/500x400.png" mktoName="Image" mktoImgWidth="255" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="display:block;border-radius:8px;" alt=""></a></div></td>
                                    </tr>
                                    <tr style="${show_headline}">
                                      <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="skgd888">Lorem ipsum
                                        dolor sit amet.</td>
                                    </tr>
                                    <tr style="${show_subheadline}">
                                      <td style="padding-bottom:16px; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skg65ed" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                                    </tr>
                                    <tr style="${show_textlink}">
                                      <td class="mktoText" id="skg65sdd" mktoName="Text Link"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                                    </tr>
                                    <tr class="t100" style="${show_cta}">
                                      <td style="padding: 0; ${show_cta}"><table border="0" cellspacing="0" cellpadding="0" style="${show_cta}">
                                          <tbody>
                                            <tr>
                                              <td align="center" class="cta mktoText" id="dklasdd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                    <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table>
                        <table width="255" style="width:255px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td height="200" class="heightauto"><table width="100%" border="0" align="left" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr class="t100">
                                      <td style="text-align: center; font-size: 14px; line-height: 1.2em; padding-bottom: 16px;" class="pt30" ><div class="mktoImg" id="kw5d99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/500x400.png" mktoName="Image" mktoImgWidth="255" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="display:block;border-radius:8px;" alt=""></a></div></td>
                                    </tr>
                                    <tr style="${show_headline}">
                                      <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kd9d9">Lorem ipsum
                                        dolor sit amet.</td>
                                    </tr>
                                    <tr style="${show_subheadline}">
                                      <td style="padding-bottom:16px; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skgwed" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                                    </tr>
                                    <tr style="${show_textlink}">
                                      <td class="mktoText" id="skwed" mktoName="Text Link"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                                    </tr>
                                    <tr class="t100" style="${show_cta}">
                                      <td style="padding: 0; ${show_cta}"><table border="0" cellspacing="0" cellpadding="0" style="${show_cta}">
                                          <tbody>
                                            <tr>
                                              <td align="center" class="cta mktoText" id="daklsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                    <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>


          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="sw0eged" mktoName="2 Columns skinny" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="Cad" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;" class="mpad"><table width="255" style="width:255px; float:left; display: inline-table;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td height="200" class="heightauto pb20"><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td style="padding: 40px 20px; background: ${bg_colorltgrey};border-radius:8px;"><table width="170" style="width:170px;" border="0" align="center" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr class="t100">
                                      <td style="text-align: center; font-size: 14px; line-height: 1.2em; padding-bottom: 16px;" class="pt30" ><div class="mktoImg" id="gkw5d99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/340x340.png" mktoName="Image" mktoImgWidth="170" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt=""></a></div></td>
                                    </tr>
                                    <tr style="${show_headline}">
                                      <td style="font-size: 30px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${clr};" class="mktoText headlines" mktoName="Headline" id="kdaad9d9">Sample Copy</td>
                                    </tr>
                                    <tr style="${show_subheadline}">
                                      <td style="font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em; text-align: ${clr};" class="mktoText" id="skgwgaded" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                                    </tr>
                                    <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                                  </tbody>
                                </table></td>
    </tr>
  </tbody>
</table></td>
                            </tr>
                          </tbody>
                        </table>
                        <table width="255" style="width:255px; float:right; display: inline-table;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td height="200" class="heightauto"><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td style="padding: 40px 20px; background: ${bg_colorltgrey};border-radius:8px;"><table width="170" style="width:170px;" border="0" align="center" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr class="t100">
                                      <td style="text-align: center; font-size: 14px; line-height: 1.2em; padding-bottom: 16px;" class="pt30" ><div class="mktoImg" id="gkwd5d99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/340x340.png" mktoName="Image" mktoImgWidth="170" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt=""></a></div></td>
                                    </tr>
                                    <tr style="${show_headline}">
                                      <td style="font-size: 30px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${clr};" class="mktoText headlines" mktoName="Headline" id="kdaagd9d9">Sample Copy</td>
                                    </tr>
                                    <tr style="${show_subheadline}">
                                      <td style="font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em; text-align: ${clr};" class="mktoText" id="svkgwgaded" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                                    </tr>
                                    <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                                  </tbody>
                                </table></td>
    </tr>
  </tbody>
</table>
</td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module CS-4 -->

        <!-- START - Module CS-5 -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="slk22dk" mktoName="Image Left" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="CS-5" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;" class="mpad"><table width="255" style="width:255px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb15"><div class="mktoImg" id="kwne99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/500x400.png" mktoName="Image" mktoImgWidth="255" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="display:block;border-radius:8px;" alt=""></a></div></td>
                            </tr>
                          </tbody>
                        </table>
                        <table width="255" style="width:255px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td height="${hero-height200}" class="heightauto"><table width="100%" border="0" align="left" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr style="${show_headline}">
                                      <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="kdw9e9">Lorem ipsum
                                        dolor sit amet.</td>
                                    </tr>
                                    <tr style="${show_subheadline}">
                                      <td style="padding-bottom:16px; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="sasdg2ed" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                                    </tr>
                                    <tr style="${show_textlink}">
                                      <td class="mktoText" id="skg222ed" mktoName="Text Link"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                                    </tr>
                                    <tr class="t100" style="${show_cta}">
                                      <td style="padding: 0; ${show_cta}"><table border="0" cellspacing="0" cellpadding="0" style="${show_cta}">
                                          <tbody>
                                            <tr>
                                              <td align="center" class="cta mktoText" id="ddklsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                    <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module CS-5 -->

        <!-- START - Module CS-6 -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="s2lk22dk" mktoName="Image Right" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="CS-6" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;" class="mpad"><table width="255" style="width:255px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb15"><div class="mktoImg" id="kwg524h9" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/500x400.png" mktoName="Image" mktoImgWidth="255" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="display:block;border-radius:8px;" alt=""></a></div></td>
                            </tr>
                          </tbody>
                        </table>
                        <table width="255" style="width:255px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td height="${hero-height200}" class="heightauto"><table width="100%" border="0" align="left" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr style="${show_headline}">
                                      <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight};" class="mktoText headlines" mktoName="Headline" id="k8e59">Lorem ipsum
                                        dolor sit amet.</td>
                                    </tr>
                                    <tr style="${show_subheadline}">
                                      <td style="padding-bottom:16px; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="sa64d" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                                    </tr>
                                    <tr style="${show_textlink}">
                                      <td class="mktoText" id="sasdd" mktoName="Text Link"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                                    </tr>
                                    <tr class="t100" style="${show_cta}">
                                      <td style="padding: 0; ${show_cta}"><table border="0" cellspacing="0" cellpadding="0" style="${show_cta}">
                                          <tbody>
                                            <tr>
                                              <td align="center" class="cta mktoText" id="dkglsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                    <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                                  </tbody>
                                </table></td>
                            </tr>
                            <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
            <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
          </tbody>
        </table>

        <!-- END - Module CS-6 -->


          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mktoModule t100" id="s2asa22dk"  mktoName="Numbers x3" mktoAddByDefault="false">
          <tr>
            <td class="bg" style="background: ${bg_colorwhite};"><table width="540" style="width:540px;" align="center" class="t100" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;" class="mpad"><!--[if true]>
<table role="presentation" width="100%" style="all:unset;opacity:0;">
  <tr>
<![endif]-->
                      <!--[if false]></td></tr></table><![endif]-->

                      <div style="display:table;width:100%;">
                        <!--[if true]>
    <td width="190">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:190px" class="column mb10">
                          <!--<![endif]-->
                          <table width="160" style="width:160px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                            <tbody>
                              <tr style="${show_headline}">
                                <td style="font-size: 48px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${clr}; background: ${bgnmbr}; border-top-left-radius: 8px; border-top-right-radius: 8px; padding: 20px 20px 16px 20px;" class="mktoText headlines" mktoName="Headline" id="kdga9d9">01</td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:14px; text-align: ${clr}; background: ${bgnmbr}; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; padding: 0 20px 14px 20px; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skgwaed" mktoName="Content">Sample Copy goes here</td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                        <!--[if true]>
    <td width="190">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:190px" class="column mb10">
                          <!--<![endif]-->
                          <table width="160" style="width:160px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                            <tbody>
                              <tr style="${show_headline}">
                                <td style="font-size: 48px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${clr}; background: ${bgnmbr}; border-top-left-radius: 8px; border-top-right-radius: 8px; padding: 20px 20px 16px 20px;" class="mktoText headlines" mktoName="Headline" id="dga9d9">02</td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:14px; text-align: ${clr}; background: ${bgnmbr}; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; padding: 0 20px 14px 20px; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skgd" mktoName="Content">Sample Copy goes here</td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                        <!--[if true]>
    <td width="160">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:160px" class="column">
                          <!--<![endif]-->
                          <table width="160" style="width:160px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                            <tbody>
                              <tr style="${show_headline}">
                                <td style="font-size: 48px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${clr}; background: ${bgnmbr}; border-top-left-radius: 8px; border-top-right-radius: 8px; padding: 20px 20px 16px 20px;" class="mktoText headlines" mktoName="Headline" id="kdgad9">03</td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:14px; text-align: ${clr}; background: ${bgnmbr}; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; padding: 0 20px 14px 20px; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skgwad" mktoName="Content">Sample Copy goes here</td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                      </div>

                      <!--[if true]>
  </tr>
</table>
<![endif]--></td>
                  </tr>
                </tbody>
              </table></td>
          </tr>
        </table>

        <!-- START - Module SP-3 -->

        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mktoModule t100" id="s2asa2g2dk"  mktoName="Speakers x3" mktoAddByDefault="false">
          <tr>
            <td class="bg" style="background: ${bg_colorwhite};"><table width="540" style="width:540px;" align="center" class="t100" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;" class="mpad"><!--[if true]>
<table role="presentation" width="100%" style="all:unset;opacity:0;">
  <tr>
<![endif]-->
                      <!--[if false]></td></tr></table><![endif]-->

                      <div style="display:table;width:100%;">
                        <!--[if true]>
    <td width="190">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:190px" class="column">
                          <!--<![endif]-->
                          <table width="160" style="width:160px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                            <tbody>
                              <tr class="t100" style="${show_image}">
                                <td style="  font-size: 14px; line-height: 1.2em; padding-bottom: 16px; text-align: ${lcr};" class="${mimg100}"><div class="mktoImg" id="kw5d9hga9" mktoImgSrc="http://placehold.jp/E3E3E3/000000/320x320.png" mktoName="Image" mktoImgWidth="160"  mktoLockImgSize="true" mktoImgClass="mimg50" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt="" style="border-radius:200px;"></a></div></td>
                              </tr>
                              <tr style="${show_headline}">
                                <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${lcr};" class="mktoText headlines" mktoName="Headline" id="kdgaga9d9">Lorem ipsum
                                  dolor sit amet.</td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:16px; text-align: ${lcr}; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="sdskgwaed" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                              </tr>
                              <tr style="${show_textlink}">
                                <td class="mktoText" id="s2skwgaded" mktoName="Text Link" style=" text-align: ${lcr};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                              </tr>
                              <tr class="t100" style="${show_cta}">
                                <td style="padding: 0; ${show_cta}"><table border="0" cellspacing="0" align="${lcr}" cellpadding="0" style="${show_cta}">
                                    <tbody>
                                      <tr>
                                        <td align="center" class="cta mktoText" id="dklfgsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                        <!--[if true]>
    <td width="190">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:190px" class="column">
                          <!--<![endif]-->
                          <table width="160" style="width:160px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                            <tbody>
                              <tr class="t100" style="${show_image}">
                                <td style="  font-size: 14px; line-height: 1.2em; padding-bottom: 16px; text-align: ${lcr};" class="pt30 ${mimg100}" ><div class="mktoImg" id="kw5hga9" mktoImgSrc="http://placehold.jp/E3E3E3/000000/320x320.png" mktoName="Image"  mktoImgWidth="160" mktoLockImgSize="true" mktoImgClass="mimg50" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt="" style="border-radius:200px;"></a></div></td>
                              </tr>
                              <tr style="${show_headline}">
                                <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${lcr};" class="mktoText headlines" mktoName="Headline" id="dgagd9d9">Lorem ipsum
                                  dolor sit amet.</td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:16px; text-align: ${lcr}; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skaadgd" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                              </tr>
                              <tr style="${show_textlink}">
                                <td class="mktoText" id="kwed" mktoName="Text Link" style=" text-align: ${lcr};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                              </tr>
                              <tr class="t100" style="${show_cta}">
                                <td style="padding: 0; ${show_cta}"><table border="0" align="${lcr}" cellspacing="0" cellpadding="0" style="${show_cta}">
                                    <tbody>
                                      <tr>
                                        <td align="center" class="cta mktoText" id="dklddsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn2_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn2_padtopbot} ${btn2_padlr} ${btn2_padtopbot} ${btn2_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                        <!--[if true]>
    <td width="160">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:160px" class="column">
                          <!--<![endif]-->
                          <table width="160" style="width:160px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                            <tbody>
                              <tr class="t100" style="${show_image}">
                                <td style="  font-size: 14px; line-height: 1.2em; padding-bottom: 16px; text-align: ${lcr};" class="pt30 ${mimg100}" ><div class="mktoImg" id="kw9hga9" mktoImgSrc="http://placehold.jp/E3E3E3/000000/320x320.png" mktoName="Image"  mktoImgWidth="160" mktoLockImgSize="true" mktoImgClass="mimg50" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt="" style="border-radius:200px;"></a></div></td>
                              </tr>
                              <tr style="${show_headline}">
                                <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${lcr};" class="mktoText headlines" mktoName="Headline" id="kdgaaasddd9">Lorem ipsum
                                  dolor sit amet.</td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:16px; text-align: ${lcr}; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skgddgwad" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                              </tr>
                              <tr style="${show_textlink}">
                                <td class="mktoText" id="s2skwe" mktoName="Text Link" style=" text-align: ${lcr};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                              </tr>
                              <tr class="t100" style="${show_cta}">
                                <td style="padding: 0; ${show_cta}"><table border="0" align="${lcr}" cellspacing="0" cellpadding="0" style="${show_cta}">
                                    <tbody>
                                      <tr>
                                        <td align="center" class="cta mktoText" id="dkaalsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn3_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn3_padtopbot} ${btn3_padlr} ${btn3_padtopbot} ${btn3_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #ffffff; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                      </div>

                      <!--[if true]>
  </tr>
</table>
<![endif]--></td>
                  </tr>
                </tbody>
              </table></td>
          </tr>
        </table>

        <!-- END - Module SP-3 -->

        <!-- START - Module SP-2 -->

        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mktoModule t100" id="s2a2a22dk"  mktoName="Speakers x2" mktoAddByDefault="false">
          <tr>
            <td class="bg" style="background: ${bg_colorwhite};"><table width="380" style="width:380px;" align="center" class="t100" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;" class="mpad"><!--[if true]>
<table role="presentation" width="100%" style="all:unset;opacity:0;">
  <tr>
<![endif]-->
                      <!--[if false]></td></tr></table><![endif]-->

                      <div style="display:table;width:100%;">
                        <!--[if true]>
    <td width="190">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:190px" class="column">
                          <!--<![endif]-->
                          <table width="160" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" style="width:160px;">
                            <tbody>
                              <tr class="t100" style="${show_image}">
                                <td style="font-size: 14px; line-height: 1.2em; padding-bottom: 16px; text-align: ${lcr};" class="${mimg100}"><div class="mktoImg" id="akw5d9hga9" mktoImgSrc="http://placehold.jp/E3E3E3/000000/320x320.png" mktoName="Image" mktoImgWidth="160" mktoLockImgSize="true" mktoImgClass="mimg50" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt="" style="border-radius:200px;"></a></div></td>
                              </tr>
                              <tr style="${show_headline}">
                                <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${lcr};" class="mktoText headlines" mktoName="Headline" id="kdadga9d9">Lorem ipsum
                                  dolor sit amet.</td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:16px; text-align: ${lcr}; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skggawaed" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                              </tr>
                              <tr style="${show_textlink}">
                                <td class="mktoText" id="s2shdkwed" mktoName="Text Link" style=" text-align: ${lcr};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                              </tr>
                              <tr class="t100" style="${show_cta}">
                                <td style="padding: 0; ${show_cta}"><table border="0" align="${lcr}" cellspacing="0" cellpadding="0" style="${show_cta}">
                                    <tbody>
                                      <tr>
                                        <td align="center" class="cta mktoText" id="dklshhd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                        <!--[if true]>
    <td width="190">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:190px" class="column">
                          <!--<![endif]-->
                          <table width="160" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" style="width:160px;">
                            <tbody>
                              <tr class="t100" style="${show_image}">
                                <td style="  font-size: 14px; line-height: 1.2em; padding-bottom: 16px; text-align: ${lcr};" class="pt30 ${mimg100}" ><div class="mktoImg" id="kwg5hga9" mktoImgSrc="http://placehold.jp/E3E3E3/000000/320x320.png" mktoName="Image"  mktoImgWidth="160" mktoLockImgSize="true" mktoImgClass="mimg50" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt="" style="border-radius:200px;"></a></div></td>
                              </tr>
                              <tr style="${show_headline}">
                                <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: ${headline_weight}; text-align: ${lcr};" class="mktoText headlines" mktoName="Headline" id="dga92d9">Lorem ipsum
                                  dolor sit amet.</td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:16px; text-align: ${lcr}; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skg2fd" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                              </tr>
                              <tr style="${show_textlink}">
                                <td class="mktoText" id="kweadd" mktoName="Text Link" style=" text-align: ${lcr};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                              </tr>
                              <tr class="t100" style="${show_cta}">
                                <td style="padding: 0; ${show_cta}"><table border="0" cellspacing="0" align="${lcr}" cellpadding="0" style="${show_cta}">
                                    <tbody>
                                      <tr>
                                        <td align="center" class="btn2 mktoText" id="adkalsd" mktoName="CTA Button" style="background-color:${btn2_bgcolor};border-color:#9e00f0;border:2px solid #9e00f0;font-family:sans-serif;font-size:${btn2_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn2_padtopbot} ${btn2_padlr} ${btn2_padtopbot} ${btn2_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #9e00f0; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
<![endif]--> </div></td>
                  </tr>
                </tbody>
              </table></td>
          </tr>
        </table>

        <!-- END - Module SP-2 -->


          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mktoModule t100" id="s2asa2gG2dk"  mktoName="Speakers x3" mktoAddByDefault="false">
          <tr>
            <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" align="center" class="t100" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding: ${pad_top16} 0 ${pad_bot16} 0;" class="mpad"><!--[if true]>
<table role="presentation" width="100%" style="all:unset;opacity:0;">
  <tr>
<![endif]-->
                      <!--[if false]></td></tr></table><![endif]-->

                      <div style="display:table;width:100%;">
                        <!--[if true]>
    <td width="190">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:190px" class="column">
                          <!--<![endif]-->
                          <table width="160" style="width:160px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                            <tbody>
                              <tr class="t100" style="${show_image}">
                                <td style="  font-size: 14px; line-height: 1.2em; padding-bottom: 16px; text-align: ${lcr};" class="${mimg100}"><div class="mktoImg" id="kw5d9Hhga9" mktoImgSrc="http://placehold.jp/E3E3E3/000000/320x320.png" mktoName="Image" mktoImgWidth="160"  mktoLockImgSize="true" mktoImgClass="mimg50" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt="" style="border-radius:8px;"></a></div></td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:16px; text-align: ${lcr}; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="sdskgHwaed" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                              </tr>
                              <tr style="${show_textlink}">
                                <td class="mktoText" id="s2skwgadGHed" mktoName="Text Link" style=" text-align: ${lcr};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                        <!--[if true]>
    <td width="190">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:190px" class="column">
                          <!--<![endif]-->
                          <table width="160" style="width:160px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                            <tbody>
                              <tr class="t100" style="${show_image}">
                                <td style="  font-size: 14px; line-height: 1.2em; padding-bottom: 16px; text-align: ${lcr};" class="pt30 ${mimg100}" ><div class="mktoImg" id="kw5hgaaA9" mktoImgSrc="http://placehold.jp/E3E3E3/000000/320x320.png" mktoName="Image"  mktoImgWidth="160" mktoLockImgSize="true" mktoImgClass="mimg50" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt="" style="border-radius:8px;"></a></div></td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:16px; text-align: ${lcr}; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="sadggkaadgd" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                              </tr>
                              <tr style="${show_textlink}">
                                <td class="mktoText" id="kgdfwed" mktoName="Text Link" style=" text-align: ${lcr};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                        <!--[if true]>
    <td width="160">
  <![endif]-->
                        <!--[if !true]><!-->
                        <div style="display:table-cell;width:160px" class="column">
                          <!--<![endif]-->
                          <table width="160" style="width:160px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                            <tbody>
                              <tr class="t100" style="${show_image}">
                                <td style="  font-size: 14px; line-height: 1.2em; padding-bottom: 16px; text-align: ${lcr};" class="pt30 ${mimg100}" ><div class="mktoImg" id="kwa9hga9" mktoImgSrc="http://placehold.jp/E3E3E3/000000/320x320.png" mktoName="Image"  mktoImgWidth="160" mktoLockImgSize="true" mktoImgClass="mimg50" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img alt="" style="border-radius:8px;"></a></div></td>
                              </tr>
                              <tr style="${show_subheadline}">
                                <td style="padding-bottom:16px; text-align: ${lcr}; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="skgaddgwad" mktoName="Content">Recommended image dimensions labeled throughout this email are doubled for crisp, hi-res rendering.</td>
                              </tr>
                              <tr style="${show_textlink}">
                                <td class="mktoText" id="s2skgwe" mktoName="Text Link" style=" text-align: ${lcr};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                              </tr>
                              <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                            </tbody>
                          </table>
                          <!--[if !true]><!-->
                        </div>
                        <!--<![endif]-->
                        <!--[if true]>
    </td>
  <![endif]-->
                      </div>

                      <!--[if true]>
  </tr>
</table>
<![endif]--></td>
                  </tr>
                </tbody>
              </table></td>
          </tr>
        </table>

        <!-- START - Module SH-1-L -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="slk2welk" mktoName="Section Title" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="SH-1-L" mktoName="Module">
                  <tbody>
                    <tr>
                      <td><table width="100%" border="0" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td class="mpad"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
                                      <td class="mpad" style="font-size: 22px; line-height: 1.2em; padding: ${pad_top8} 0 ${pad_bot8} 0; text-align: ${clr}" class="mktoText" mktoName="Headline" id="k9ed"><strong>Section Title</strong></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>

        <!-- END - Module SH-1-L -->

        <!-- START - Module DV-1 -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="slkaselk" mktoName="Divider" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="${divider_width}" style="width:${divider_width}px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="dv1">
                  <tbody>
                    <tr>
                      <td><table width="100%" border="0" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td class="mpad"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
                                      <td style="text-align: center; padding: ${pad_top8} 0 ${pad_bot8} 0;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tbody>
                                            <tr>
                                              <td style="border-top:${divider_thickness} solid ${divider_color};font-size: 0; line-height: ${divider_thickness}; height: ${divider_thickness};">&nbsp;</td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                    <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
            <!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]-->
          </tbody>
        </table>

        <!-- END - Module DV-1 -->

        <!-- START - Module CS-7 -->

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" mktoName="Image Feature" id="lgkd0w" mktoAddByDefault="false">
          <tbody>
            <tr>
              <td style="background: ${bg_colorwhite};" class="bg"><table width="540" style="width:540px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100" id="CS-7" mktoName="Module">
                  <tbody>
                    <tr>
                      <td style="padding: ${pad_top30} 0 ${pad_bot30} 0;" class="mpad"><table width="540" style="width:540px;" border="0" cellpadding="0" cellspacing="0" class="t100">
                          <tbody>
                            <tr>
                              <td><table width="100%" border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                      <tr style="display:">
                                      <td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; text-align: center" font-weight: ${headline_weight}; class="mktoText headlines" mktoName="Headline" id="kdj9e9">Lorem ipsum
                                        dolor sit amet.</td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: center; font-size: 14px; line-height: 1.2em; padding-bottom: 16px;" class="mimg100"><div class="mktoImg" id="kwg5f99" mktoImgSrc="https://placehold.jp/40/E3E3E3/000000/700x400.png" mktoName="Image" mktoImgWidth="350" mktoLockImgSize="true" mktoImgClass="mimg100" mktoImgLink="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" mktoLockImgStyle="true"> <a><img style="border-radius:8px;" alt=""></a></div></td>
                                    </tr>

                                    <tr style="${show_subheadline}">
                                      <td style="padding-bottom:16px; text-align: center; font-size: ${font_size}; color: ${global_fontcolor}; line-height: 1.5em;" class="mktoText" id="sas29ed" mktoName="Content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                    </tr>
                                    <tr style="${show_textlink}">
                                      <td style=" text-align: center" class="mktoText" id="sk2225ed" mktoName="Text Link"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="text-decoration:none; color: #9e00f0;"><strong>Learn more →</strong></a></td>
                                    </tr>
                                    <tr class="t100" style="${show_cta}">
                                      <td style="padding: 0; ${show_cta}"><table border="0" align="center" cellpadding="0" cellspacing="0" style="${show_cta}">
                                          <tbody>
                                            <tr>
                                              <td align="center" class="cta mktoText" id="dddlsd" mktoName="CTA Button" style="background-color:${btn_bgcolor};font-family:sans-serif;font-size:${btn_txtsize};text-align:center;-webkit-text-size-adjust:none; padding: ${btn_padtopbot} ${btn_padlr} ${btn_padtopbot} ${btn_padlr}; line-height: 1; border-radius:${btn_radius};"><a href="https://seekout.com/?utm_medium=email&utm_source=marketo&utm_campaign={{program.name}}" style="color: #FFFFFF; text-decoration: none; font-weight:bold;">Call to Action</a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                  </tbody>
                                </table></td>
                            </tr>
                          </tbody>
                        </table></td>
                    </tr>
                  </tbody>
                </table></td>
            </tr>
          </tbody>
        </table>


        <!-- START Snippet Module -->


    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mktoModule" id="slkgdsdg" mktoName="Snippet">
          <tbody>
          <tr>
            <td style="background: ${bg_colorwhite};" mktoName="Snippet" class="mktoSnippet" id="skgoagdkd" mktoName="Snippet">Insert Snippet
          </td>
          </tr>
          </tbody>
        </table>

        <!-- END - ||||||| CONTAINER ||||||| --></td>
    </tr>
  </tbody>
</table>
</body>
</html>

```
