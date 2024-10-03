## Basic Information about the Velocity Script

This Velocity script is designed to generate dynamic HTML content in a Marketo email based on the selections made on a form. The form then stores these values into a field called `Misc_Ops_Field_String_01__c` (this is the API name of the field and how it must be referenced in the velocity script). Here's a breakdown of its functionality:

1. **Splitting a String into a List**: The script starts by splitting the value of `lead.Misc_Ops_Field_String_01__c` by `"; "` (semicolon followed by a space), resulting in a list of choices stored in `$resourceChoices`.
    
2. **Initialization of an Output List**: It initializes an empty list named `$finalOutput` for storing the final HTML content based on the selections.
    
3. **Conditional Content Generation**:
    
    - The script checks if the `$resourceChoices` list is not empty. If it's empty, none of the following code executes, and it would result in "No options selected".
    - It iterates over each choice in `$resourceChoices` using a `foreach` loop. For each resource choice, it checks if the choice matches specific strings (e.g., "Internal Talent Solutions", "Inbound Talent", etc.).
    - When a match is found, it generates a specific block of HTML code related to that choice and adds it to the `$finalOutput` list. This block includes a structured HTML table with specific styles, images, and links that seem to correspond to various resources or offerings provided by "SeekOut" (as suggested by the content within the HTML).
    - There are multiple `if` conditions checking for different resource choices like "Internal Talent Solutions", "Inbound Talent", "Rediscovery - general ATS", "Healthcare", "Diversity", "Sourcing Platform", and "Analytics". Each condition adds a specific HTML content block to the `$finalOutput`.
4. **Output Generation**:
    
    - After iterating through all choices and conditionally adding content to `$finalOutput`, the script checks if `$finalOutput` is not empty.
    - If it's not empty, it iterates over `$finalOutput` and outputs each HTML block. *This results in a concatenated string of HTML blocks that match the initially selected resource choices.*
    - If `$finalOutput` is empty (which could only happen if `$resourceChoices` is empty or none of the resources match the predefined strings), it outputs "No options selected".

This script is useful for generating customized HTML content based on user selections, allowing for dynamic content generation in emails. The primary use case of this example was intended to enable in-booth content downloads at tradeshows, but this sort of functionality could also be extensible to webpages or other marketing materials, specifically tailored to the interests or needs indicated by the `Misc_Ops_Field_String_01__c` field.

## The Velocity Script Itself

>[!warning] It's dangerous to code alone, here take this
>The HTML contained in this velocity script is unique to the email template this example was pulled from. The easiest way to pull the correct HTML from *your* email template, particularly if you're not a developer, is to build the full email as you normally would using Marketo's modular email editor, and then export to HTML. You'll need to identify each section uniquely, and then ensure you add the appropriate snippets of code between `$finalOutput.add('` and `'))` for each individual asset.

>[!tip] Form Stored Values Match $resources
>You'll notice for every *IF* statement in the velocity script, the resources value is set to == whatever the stored value for a given asset is on your form. For example, on this form, the form selection `SeekOut Grow: Overview` is stored as `Internal Talent Solutions`, which you can see on line 6 of the below code.


```java

#set( $resourceChoices = $lead.Misc_Ops_Field_String_01__c.split("; ") )
#set ($finalOutput = [])

#if (!$resourceChoices.isEmpty())
  #foreach ($resources in $resourceChoices)
    #if( $resources == "Internal Talent Solutions") 
      #set ($swallow = $finalOutput.add('<div><table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-1Rgaed2058c2-ce7c-438c-9c1d-9041394d9ed9"> 
<tbody> 
<tr> 
<td style="padding:  0px 0 0px 30px; background: #FFFFFF" class="mpad pt30 bg"> 
<table width="540" style="width:540px;" border="0" cellspacing="0" cellpadding="0" class="t100"> 
<tbody> 
<tr> 
<td> 
<table width="400" style="width:400px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td height="120" class="heightauto pb20"> 
<table width="100%" border="0" cellpadding="0" cellspacing="0"> 
<tbody> 
<tr style="True"> 
<td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: normal;" class="mktoText headlines" id="kdw9e266e5f722-4f9d-4432-a49c-77783de0e402"> 
<div>
 SeekOut Grow 
<br> 
</div></td> 
</tr> 
<tr style="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;"> 
<td style="padding-bottom:16px;" class="mktoText" id="sasdg2ed35bc95707-8950-41ad-a311-31464f5eb665">Body copy uses DM Sans. Please do not edit font size or line height.</td> 
</tr> 
<tr style="True"> 
<td class="mktoText" id="skg222ed39d7ec92a-e332-4a01-8b43-b9fefa5c2420"> 
<div> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" style="text-decoration: none;" target="_blank">Download Now →</a> 
</div></td> 
</tr> 
<!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]--> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table> 
<table width="120" style="width:120px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"> 
<div class="mktoImg" id="kw56f9a902f96c32-2b2c-4c0f-82e8-3960e8a2403b" mktolockimgsize="true" mktolockimgstyle="true"> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" target="_blank"><img style="border-radius:8px;" alt="SeekOut Recruit" src="https://cdn.bfldr.com/727LKQZP/at/m7jk3v3j6sfsmkfq9mqz7b8x/Icon_Chat_-_Amethyst.eps?auto=webp&amp;format=png&amp;width=240&amp;height=240" width="120" class="mimg50"></a> 
</div></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></div>'))
    #end
    #if ( $resources == "Inbound Talent") 
      #set ($swallow = $finalOutput.add('<div><table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-1Rgade38ec5b-82a9-485d-875c-0ca14aef837a"> 
<tbody> 
<tr> 
<td style="padding:  0px 0 0px 30px; background: #FFFFFF" class="mpad pt30 bg"> 
<table width="540" style="width:540px;" border="0" cellspacing="0" cellpadding="0" class="t100"> 
<tbody> 
<tr> 
<td> 
<table width="400" style="width:400px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td height="120" class="heightauto pb20"> 
<table width="100%" border="0" cellpadding="0" cellspacing="0"> 
<tbody> 
<tr style="True"> 
<td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: normal;" class="mktoText headlines" id="kdw9e2e61c3353-4e1a-44df-8cda-7b2d83e1d107"> 
<div>
 SeekOut Recruit: Applicant Review 
<br> 
</div></td> 
</tr> 
<tr style="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;"> 
<td style="padding-bottom:16px;" class="mktoText" id="sasdg2ed3c1c4c37c-5caa-41e9-b370-3fab45ee9ffd">Body copy uses DM Sans. Please do not edit font size or line height.</td> 
</tr> 
<tr style="True"> 
<td class="mktoText" id="skg222ed34efdba14-6059-4b8e-b974-9392281c744b"> 
<div> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Recruit-Applicant-Review.pdf" style="text-decoration: none;" target="_blank">Download Now →</a> 
</div></td> 
</tr> 
<!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]--> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table> 
<table width="120" style="width:120px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"> 
<div class="mktoImg" id="kw56f9a950ef3108-c5d5-4853-9669-ba1154436dbd" mktolockimgsize="true" mktolockimgstyle="true"> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" target="_blank"><img style="border-radius:8px;" alt="SeekOut Recruit" src="https://cdn.bfldr.com/727LKQZP/at/m7jk3v3j6sfsmkfq9mqz7b8x/Icon_Chat_-_Amethyst.eps?auto=webp&amp;format=png&amp;width=240&amp;height=240" width="120" class="mimg50"></a> 
</div></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></div>'))
      
    #end
    #if ( $resources == "Rediscovery - general ATS")
      #set ($swallow = $finalOutput.add('<div><table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-1Rgaf24cbb15-4198-4d82-bdfe-fe03b84e1551"> 
<tbody> 
<tr> 
<td style="padding:  0px 0 0px 30px; background: #FFFFFF" class="mpad pt30 bg"> 
<table width="540" style="width:540px;" border="0" cellspacing="0" cellpadding="0" class="t100"> 
<tbody> 
<tr> 
<td> 
<table width="400" style="width:400px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td height="120" class="heightauto pb20"> 
<table width="100%" border="0" cellpadding="0" cellspacing="0"> 
<tbody> 
<tr style="True"> 
<td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: normal;" class="mktoText headlines" id="kdw9e213b860a9-8808-44b4-813b-1e146e5a24f7"> 
<div>
 SeekOut Recruit:&nbsp;Talent Rediscovery 
<br> 
</div></td> 
</tr> 
<tr style="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;"> 
<td style="padding-bottom:16px;" class="mktoText" id="sasdg2ed39eba4b8f-b473-4ecb-8a67-64d6958afdad">Body copy uses DM Sans. Please do not edit font size or line height.</td> 
</tr> 
<tr style="True"> 
<td class="mktoText" id="skg222ed35c34cb52-1440-4a3a-bb4c-1aa218e0fad7"> 
<div> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" style="text-decoration: none;" target="_blank">Download Now →</a> 
</div></td> 
</tr> 
<!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]--> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table> 
<table width="120" style="width:120px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"> 
<div class="mktoImg" id="kw56f9a9855c6c6f-ade8-4a67-8a95-ca71b6da20d8" mktolockimgsize="true" mktolockimgstyle="true"> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" target="_blank"><img style="border-radius:8px;" alt="SeekOut Recruit" src="https://cdn.bfldr.com/727LKQZP/at/88mhkwvz7zgjb2pqc9gm5rw/Icon_AI_Matching_-_Amethyst.eps?auto=webp&amp;format=png&amp;width=240&amp;height=240" width="120" class="mimg50"></a> 
</div></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></div>'))
      
    #end
    #if ( $resources == "Healthcare") 
      #set ($swallow = $finalOutput.add('<div><table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-1Rgae3751926-3718-49a0-9c2d-a894228d0193"> 
<tbody> 
<tr> 
<td style="padding:  0px 0 0px 30px; background: #FFFFFF" class="mpad pt30 bg"> 
<table width="540" style="width:540px;" border="0" cellspacing="0" cellpadding="0" class="t100"> 
<tbody> 
<tr> 
<td> 
<table width="400" style="width:400px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td height="120" class="heightauto pb20"> 
<table width="100%" border="0" cellpadding="0" cellspacing="0"> 
<tbody> 
<tr style="True"> 
<td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: normal;" class="mktoText headlines" id="kdw9e243edc172-26ec-4763-99c5-be9fe879911b"> 
<div>
 SeekOut Recruit:&nbsp;Healthcare Talent Pool 
<br> 
</div></td> 
</tr> 
<tr style="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;"> 
<td style="padding-bottom:16px;" class="mktoText" id="sasdg2ed3e1713e84-c332-4c0e-b0df-36a346c1a6b1">Body copy uses DM Sans. Please do not edit font size or line height.</td> 
</tr> 
<tr style="True"> 
<td class="mktoText" id="skg222ed39d7adf7a-0a5a-4826-9d0c-cca8cd9266dc"> 
<div> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Healthcare-Features.pdf?utm_medium=email&amp;utm_source=marketo&amp;utm_campaign={{program.name}}" style="text-decoration: none;" target="_blank">Download Now →</a> 
</div></td> 
</tr> 
<!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]--> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table> 
<table width="120" style="width:120px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"> 
<div class="mktoImg" id="kw56f9a9a27e5937-1967-473b-9952-5b474aad380c" mktolockimgsize="true" mktolockimgstyle="true"> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" target="_blank"><img style="border-radius:8px;" alt="SeekOut Recruit" src="https://cdn.bfldr.com/727LKQZP/at/rz7qt3v2r36s67r6znsf/Icon_Cloud_-_Amethyst.eps?auto=webp&amp;format=png&amp;width=240&amp;height=240" width="120" class="mimg50"></a> 
</div></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table>'))      
    #end  
    #if ( $resources == "Diversity") 
      #set ($swallow = $finalOutput.add('<table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-1Rgaf3e2f7e5-ac7d-42cd-9674-ab377184f3d1"> 
<tbody> 
<tr> 
<td style="padding:  0px 0 0px 30px; background: #FFFFFF" class="mpad pt30 bg"> 
<table width="540" style="width:540px;" border="0" cellspacing="0" cellpadding="0" class="t100"> 
<tbody> 
<tr> 
<td> 
<table width="400" style="width:400px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td height="120" class="heightauto pb20"> 
<table width="100%" border="0" cellpadding="0" cellspacing="0"> 
<tbody> 
<tr style="True"> 
<td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: normal;" class="mktoText headlines" id="kdw9e2d14abeea-a512-46e3-bea4-ea3a38f47f36"> 
<div>
 SeekOut Recruit: Diversity Hiring 
<br> 
</div></td> 
</tr> 
<tr style="True"> 
<td class="mktoText" id="skg222ed35ab259dc-8f20-4f8e-9de3-468850c4e10b"> 
<div> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium=email&amp;utm_source=marketo&amp;utm_campaign={{program.name}}m.name}}" style="text-decoration: none;" target="_blank">Download Now →</a> 
</div></td> 
</tr> 
<!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]--> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table> 
<table width="120" style="width:120px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"> 
<div class="mktoImg" id="kw56f9a9eb650d6e-34bd-4815-a1cb-135b55a74265" mktolockimgsize="true" mktolockimgstyle="true"> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" target="_blank"><img style="border-radius:8px;" alt="SeekOut Recruit" src="https://cdn.bfldr.com/727LKQZP/at/pckpr69p8jpt3nrw5t4svhp/Icon_Community_-_Amethyst.eps?auto=webp&amp;format=png&amp;width=240&amp;height=240" width="120" class="mimg50"></a> 
</div></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></div>'))
      
    #end  
    #if ( $resources == "Sourcing Platform")
      #set ($swallow = $finalOutput.add('<div><table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-1Rga5ea95409-d7a6-4a7a-add6-eb410b6aa8fb"> 
<tbody> 
<tr> 
<td style="padding:  0px 0 0px 30px; background: #FFFFFF" class="mpad pt30 bg"> 
<table width="540" style="width:540px;" border="0" cellspacing="0" cellpadding="0" class="t100"> 
<tbody> 
<tr> 
<td> 
<table width="400" style="width:400px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td height="120" class="heightauto pb20"> 
<table width="100%" border="0" cellpadding="0" cellspacing="0"> 
<tbody> 
<tr style="True"> 
<td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: normal;" class="mktoText headlines" id="kdw9e2e2db06a8-f3c5-4626-96df-213449896475"> 
<div>
 SeekOut Recruit:&nbsp;External Sourcing 
<br> 
</div></td> 
</tr> 
<tr style="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;"> 
<td style="padding-bottom:16px;" class="mktoText" id="sasdg2ed30ea97cac-6a80-4b92-90ba-fae4ee06dc97">Body copy uses DM Sans. Please do not edit font size or line height.</td> 
</tr> 
<tr style="True"> 
<td class="mktoText" id="skg222ed3f12ae168-b355-467d-b932-2fb6240427dd"> 
<div> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" style="text-decoration: none;" target="_blank">Download Now →</a> 
</div></td> 
</tr> 
<!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]--> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table> 
<table width="120" style="width:120px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"> 
<div class="mktoImg" id="kw56f9a9d453f4c7-f347-4846-a026-5b8be0ee3e77" mktolockimgsize="true" mktolockimgstyle="true"> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" target="_blank"><img style="border-radius:8px;" alt="SeekOut Recruit" src="https://cdn.bfldr.com/727LKQZP/at/pckpr69p8jpt3nrw5t4svhp/Icon_Community_-_Amethyst.eps?auto=webp&amp;format=png&amp;width=240&amp;height=240" width="120" class="mimg50"></a> 
</div></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></div>'))
      
    #end  
    #if ( $resources== "Analytics")
      #set ($swallow = $finalOutput.add('<div>
<table width="600" style="width:600px;" border="0" align="center" cellpadding="0" cellspacing="0" class="t100 mktoModule" id="H-1Rga099d6532-91c0-4d3e-8f77-6ff7be728bdf"> 
<tbody> 
<tr> 
<td style="padding:  0px 0 0px 30px; background: #FFFFFF" class="mpad pt30 bg"> 
<table width="540" style="width:540px;" border="0" cellspacing="0" cellpadding="0" class="t100"> 
<tbody> 
<tr> 
<td> 
<table width="400" style="width:400px;" border="0" align="right" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td height="120" class="heightauto pb20"> 
<table width="100%" border="0" cellpadding="0" cellspacing="0"> 
<tbody> 
<tr style="True"> 
<td style="font-size: 24px; line-height: 1.2em; padding-bottom: 16px; font-weight: normal;" class="mktoText headlines" id="kdw9e203f1f251-01da-4a04-b3d3-b6968fba3952"> 
<div>
 SeekOut Insight: Talent Analytics Solution 
<br> 
</div></td> 
</tr> 
<tr style="display:none;width:0px;max-height:0px;overflow:hidden;mso-hide:all;height:0;font-size:0;max-height:0;line-height:0;margin:0 auto;"> 
<td style="padding-bottom:16px;" class="mktoText" id="sasdg2ed37fa4ad5e-8658-4b19-833f-be1e8d87fa85">Body copy uses DM Sans. Please do not edit font size or line height.</td> 
</tr> 
<tr style="True"> 
<td class="mktoText" id="skg222ed33824d61c-8d3c-4851-95b8-f6d4e4be67f7"> 
<div> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" style="text-decoration: none;" target="_blank">Download Now →</a> 
</div></td> 
</tr> 
<!--[if gt mso 15]>
<tr style="font-size:0px;line-height:0px;"><td style="height:0.1pt;">&nbsp;</td></tr>
<![endif]--> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table> 
<table width="120" style="width:120px;" border="0" align="left" cellpadding="0" cellspacing="0" class="t100"> 
<tbody> 
<tr> 
<td style="text-align: center; font-size: 14px; line-height: 1.2em;" class="pb30"> 
<div class="mktoImg" id="kw56f9a907b34f22-e6ad-469c-b745-a07e8b44e197" mktolockimgsize="true" mktolockimgstyle="true"> 
<a href="https://info.seekout.com/rs/726-VHL-519/images/SeekOut-Diversity.pdf?utm_medium={{my.utm_medium}}&amp;utm_source={{my.utm_source}}&amp;utm_campaign={{program.name}}" target="_blank"><img style="border-radius:8px;" alt="SeekOut Recruit" src="https://cdn.bfldr.com/727LKQZP/at/rz7qt3v2r36s67r6znsf/Icon_Cloud_-_Amethyst.eps?auto=webp&amp;format=png&amp;width=240&amp;height=240" width="120" class="mimg50"></a> 
</div></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></td> 
</tr> 
</tbody> 
</table></div>'))
      
    #end  
  #end
#else
  No options selected
#end

#if (!$finalOutput.isEmpty())
  #foreach ($output in $finalOutput)
      $output
  #end
#else
  No options selected
#end

```

## The Marketo Setup
### The Form
Generally, you want to make the form as brief as possible, using the minimum number of fields to make it easy and convenient to fill out while having a conversation (e.g. at a tradeshow booth). In most instances, you'll minimally want to capture:

1. **Email Address** – so you have a unique identifier for the record that can either create a new record in Marketo or associate the form submission with an existing one.
2. **Country** – so you can know what compliance laws apply, ensuring you leverage the appropriate opt-in policies (read: you might be able to add this person to your mailable database if the proper consent is provided)
3. **A Scratch field** – you'll configure this Field Type as "Checkboxes," and in this example we call a field named `Misc - Ops Field String 01`
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222191311.png)
>[!tip] Hidden Fields + Visibility Rules
>It is highly recommended that you leverage your standard visibility rules for consent/opt-in language, as well as any hidden fields you may want to capture. The consent/opt-in language provides an opportunity to gather the appropriate consent for the country a user indicates on the form and potentially enables you to grow you mailable database. For certain use cases (like in-booth content download forms), you can even hardcode certain parameters to ensure any new leads are attributed to the correct Lead Source.

As multiple items are selected, they'll automatically be separated with a semi-colon. This is why the velocity script uses a semi-colon as the unique separator. In the example above, the display and stored values are as follows:

*display value|stored value*
SeekOut Grow: Overview|Internal Talent Solutions
SeekOut Recruit: External Sourcing|Sourcing Platform
SeekOut Recruit: Applicant Review|Inbound Talent
SeekOut Recruit: Talent Rediscovery|Rediscovery - general ATS
SeekOut Recruit: Diversity Hiring|Diversity
SeekOut Recruit: Healthcare Talent Pool|Healthcare
Select All |Select All


### Marketo Program Setup
Simply place the above velocity script into a program-level token (name it whatever you wish), and reference that token in the body of an email.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222192309.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222192228.png)

>[!warning] There are many templates, this one is mine
>Your email experience - and the HTML within the velocity script above – will vary based on your email template. As with all emails, ensure you test the experience thoroughly, filling out the form and selecting every content asset. This will enable you to receive a functional version of the email the same way your customers/prospects will, and help you confirm the experience is as you intended.

The beauty of this approach is that you can build it into your program templates (email, landing page, trigger, and even a static list if you're as much a control freak as me) and minimize the amount of work/level of effort required to repeat the experience across similar campaign types. 

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%2520image%252020240222192643.png%257C300)
