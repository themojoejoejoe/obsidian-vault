
## Overall Program Structure & Triggers

The program consists of 3 compliance "buckets" that map to Implicit, Explicit, and Double-Opt-in compliance laws. As country data changes, people are added/moved to the appropriate buckets and unsubscribe status is set accordingly (e.g. if country is empty and a record is based in France, they are marked unsubscribed from marketing emails. If this person then moved to the US, they would be opted back in due to compliance laws in the implicit opt-in regions)

There are two triggers that manage this program: 

1. *A - Person Created*
2. *B - Region Change*

In either scenario, another campaign is requested (`010 - Sort Into Program Processing Group`) to sort the record into the appropriate compliance bucket.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214081434.png)

 > [!warning] Custom Field Creation Required
> This program references several custom fields: `Compliance - Processing Group`, `Compliance - Explicit Opt-in`, `Compliance - US Opt-in`, `Compliance - Consent History`, `Compliance - Consent Status`, `Compliance - Explicit Opt-in Date`, `Compliance - Double Opt-in Date`. You can name these fields anything you want, but they establish definitions the rest of this program relies upon. As a best practice for clarity, I recommend appending `Compliance -` to the beginning of each field name to create a set of fields clearly designated for this purpose.

> [!tip] Create Folder Structure & Smart Lists first
> To implement this compliance engine in a new instance, you'll need to create the overall structure, including the smart lists, before you can build the triggers. After field creation, this should be your second step. Read on for more detail about how each smart list is made and where they fit into the overall program structure.
### A - Person Created
This campaign is requested by the initial processing program. The initial processing program triggers off of `Person is Created` and then cascades through the appropriate jobs to ensure all processes are applied to new records as they enter the database. This includes things like triggering enrichment through a 3P system, the demographic scoring process, other data management campaigns (i.e. lead source), compliance, and lifecycle processing.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214082521.png)
**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214082322.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214082826.png)
### B - Region Change
This trigger fires when country *or* inferred country values change. Inferred country can be helpful when you don't have country data for a given record but you feel reasonably safe applying compliance policies based on IP address information collected via engagement. *To be safe, review this approach with your legal team.*

**Smart List:**
*Filter Logic: ((1 and 2) or ((3 or 4) and 5) or (6 and 7))*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214084205.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214084830.png)

## Privacy Compliance Sorting
This subfolder consists of two additional triggers:

1. *010 - Sort Into Program Processing Group*
2. *090 - ERROR*

### 010 - Sort Into Program Processing Group
When requested, this campaign routes persons into the appropriate Privacy Compliance process by setting the Compliance - Processing Group value.

**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214085813.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214085831.png)
 > [!tip] The above smart lists are defined in each of the compliance folders. More information below. 
### 090 - ERROR
This campaign will be called if a lead does not qualify for a Privacy Compliance processing group, and it will send an alert indicating that the lead could not be properly processed. This can occur if a non-standardized Country value is present and will require the Country value to be standardized or added to the Privacy Compliance smart list filters.

**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214090816.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214090834.png)

## 01 - Opt Out (no consent required)
This folder consists of a definitions smart list and a "controller." This controller then calls the appropriate child trigger based on either the value of the `Compliance - Explicit Opt-in` field or smart/static list membership. The lists will be further expounded upon at the end of this section.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214105541.png%7C400)
### 01 - Opt-Out Smart List
Generally, this applies to the United States.

*Advanced Filter Logic: 1 or (2 and 3) or 4*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214092009.png)
> [!warning] Filter 4: Contact Status may not be appropriate for your use case
> This was a use-case driven filter that may not be appropriate/acceptable for all companies. The intent of this field in this particular case was to establish all licensed users (customers) as opted in *unless* they had previously unsubscribed. Consult with your legal team regarding your company's acceptable risk threshold.

#### Country Filter List
United States
US
Puerto Rico
PR

### 100 - Opt-Out: Controller
This campaign is triggered when people are sorted into the "1. Opt-Out" processing group. It sets the `Compliance - Consent Status` field value to `Implied Consent: Region`. It also changes Unsubscribed to False for persons who were Unsubscribed with an Unsubscribed Reason set by this Privacy Compliance program.

**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214092519.png)

**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214092536.png)

### 110 - Opt-Out: Explicit Consent Captured
This is requested by the `100 - Opt-Out: Controller` trigger *or* triggered when the value of `Compliance - Explicit Opt-In` changes to `yes`. 

**Smart List:
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214092942.png)**
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214103103.png)
### 120 - Opt-Out: Implied Consent - Region
If a record is found to be in an implied consent region, this trigger ensures that if they were previously unsubscribed due to privacy compliance reasons (i.e. Country was blank), they can be opted back in when that data is provided.

**Smart List:**
*Advanced Filter Logic: 1 and (2 or 3)*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214103825.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214103904.png)
### 180 - Opt-Out: No Consent
In the event that we receive a signal that `Compliance - Explicit Opt-in` is set to `no` and it's not due to a user action to unsubscribe, this trigger will consider them opted out. This is based on a related Smart List, where a record is marked unsubscribed but the unsubscribed reason does not contain `Privacy Compliance`

**Smart List:**
*Advanced Filter Logic: 1 and (2 or 3)*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214104935.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214105006.png)

### 190 - Opt-Out: ERROR
This smart list is a fail-safe for detecting errors in the opt-out controller flow. Generally, seeing this deactivated over time is a good thing, as it means you haven't run into errors in a significant amount of time and the opt-in group process is *probably* operating as intended. 

This is only requested from `100 - Opt-Out: Controller` and simply adds records to a list and sends an internal alert.

**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214111741.png)
> [!tip] Automatic Trigger Deactivation
> In Marketo, triggers are automatically deactivated if they are on for 6 months with no one that qualifies for the flow. When you build this trigger, set yourself an automated reminder in your project management tool (i.e. Asana) to review and reactivate if necessary.


### 100 - Smart Lists
#### 120 - Opt-Out: Implied Consent - Region

Either `Unsubscribed` = false, *or* `Unsubscribed` = true and `Unsubscribed Reason` contains `Privacy Compliance`

*Advanced Filter Logic: 1 or (2 and 3)*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214112601.png)
#### 180 - Opt-Out: No Consent

`Unsubcribed` = True *and* `Unsubscribed Reason` = `Privacy Compliance`
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214113029.png)

### 100 - Static Lists
The following static lists are referenced in the above flows:

* *110 - Opt-Out: Explicit Consent Captured*
* *120 - Opt-Out: Implied Consent Region*
* *180 - Opt-Out: No Consent*
* *190 - Opt-Out: ERROR*

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214113249.png)

## 02 - Opt in (explicit consent required)
Similar to the above, this folder contains definitions and workflows related to the explicit consent bucket.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240214113449.png%7C400)
### 02a. Opt-in
**Smart List:**
*Advanced Filter Logic: 1 or (2 and 3
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216121043.png)

#### Country List
Afghanistan
Aland Islands
Albania
Algeria
American Samoa
Andorra
Angola
Anguilla
Antarctica
Antigua and Barbuda
Argentina
Armenia
Aruba
Australia
Austria
Azerbaijan
Bahamas
Bahrain
Bangladesh
Barbados
Belarus
Belgium
Belize
Benin
Bermuda
Bhutan
Bolivia
Bonaire, Saint Eustatius and Saba
Bosnia and Herzegovina
Botswana
Bouvet Island
Brazil
British Indian Ocean Territory
Brunei Darussalam
Bulgaria
Burkina Faso
Burundi
Cape Verde
Cambodia
Cameroon
Cayman Islands
Central African Republic
Chad
Chile
China
Christmas Island
Cocos (Keeling) Islands
Colombia
Comoros
Congo
Congo, The Democratic Republic of the
Cook Islands
Costa Rica
Cote D'Ivoire
Croatia
Cuba
Curacao
Cyprus
Czech Republic
Denmark
Djibouti
Dominica
Dominican Republic
Ecuador
Egypt
El Salvador
Equatorial Guinea
Eritrea
Estonia
Ethiopia
Falkland Islands
Faroe Islands
Fiji
Finland
France
French Guiana
French Polynesia
French Southern Territories
Gabon
Gambia
Georgia
Ghana
Gibraltar
Greece
Greenland
Grenada
Guadeloupe
Guam
Guatemala
Guernsey
Guinea
Guinea-Bissau
Guyana
Haiti
Heard Island and McDonald Islands
Holy See (Vatican City State)
Honduras
Hong Kong
Hungary
Iceland
India
Indonesia
Iran, Islamic Republic of
Iraq
Ireland
Isle of Man
Israel
Italy
Jamaica
Japan
Jersey
Jordan
Kazakhstan
Kenya
Kiribati
North Korea
South Korea
Kuwait
Kyrgyzstan
Laos
Latvia
Lebanon
Lesotho
Liberia
Libya
Liechtenstein
Lithuania
Luxembourg
Macao
Macedonia
Madagascar
Malawi
Malaysia
Maldives
Mali
Malta
Marshall Islands
Martinique
Mauritania
Mauritius
Mayotte
Mexico
Micronesia
Moldova, Republic of
Monaco
Mongolia
Montenegro
Montserrat
Morocco
Mozambique
Myanmar
Namibia
Nauru
Nepal
Netherlands
New Caledonia
New Zealand
Nicaragua
Niger
Nigeria
Niue
Norfolk Island
Northern Mariana Islands
Norway
Oman
Pakistan
Palau
Palestine, State Of
Panama
Papua New Guinea
Paraguay
Peru
Philippines
Pitcairn
Poland
Portugal
Qatar
Reunion
Romania
Russian Federation
Rwanda
Saint Barthélemy
Saint Helena, Ascension and Tristan da Cunha
Saint Kitts and Nevis
Saint Lucia
Saint Martin (French part)
Saint Pierre and Miquelon
Saint Vincent and the Grenadines
Samoa
San Marino
Sao Tome and Principe
Saudi Arabia
Senegal
Serbia
Seychelles
Sierra Leone
Singapore
Sint Maarten (Dutch part)
Slovakia
Slovenia
Solomon Islands
Somalia
South Africa
South Georgia and the South Sandwich Islands
South Sudan
Spain
Sri Lanka
Sudan
Suriname
Swaziland
Svalbard and Jan Mayen
Sweden
Switzerland
Syrian Arab Republic
Taiwan
Tajikistan
Tanzania, United Republic of
Thailand
Timor-Leste
Togo
Tokelau
Tonga
Trinidad and Tobago
Tunisia
Turkey
Turkmenistan
Turks and Caicos Islands
Tuvalu
Uganda
Ukraine
United Arab Emirates
United Kingdom
United States Minor Outlying Islands
Uruguay
Uzbekistan
Vanuatu
Venezuela
Viet Nam
Vietnam
Virgin Islands, British
Virgin Islands, U.S.
Wallis and Futuna
Western Sahara
Yemen
Zambia
Zimbabwe
AF
AX
AL
DZ
AS
AD
AO
AI
AQ
AG
AR
AM
AW
AU
AT
AZ
BS
BH
BD
BB
BY
BE
BZ
BJ
BM
BT
BO
BQ
BA
BW
BV
BR
IO
BN
BG
BF
BI
CV
KH
CM
KY
CF
TD
CL
CN
CX
CC
CO
KM
CG
CD
CK
CR
CI
HR
CU
CW
CY
CZ
DK
DJ
DM
DO
EC
EG
SV
GQ
ER
EE
ET
FK
FO
FJ
FI
FR
GF
PF
TF
GA
GM
GE
GH
GI
GR
GL
GD
GP
GU
GT
GG
GN
GW
GY
HT
HM
VA
HN
HK
HU
IS
IN
ID
IR
IQ
IE
IM
IL
IT
JM
JP
JE
JO
KZ
KE
KI
KP
KR
KW
KG
LA
LV
LB
LS
LR
LY
LI
LT
LU
MO
MK
MG
MW
MY
MV
ML
MT
MH
MQ
MR
MU
YT
MX
FM
MD
MC
MN
ME
MS
MA
MZ
MM
NA
NR
NP
NL
NC
NZ
NI
NE
NG
NU
NF
MP
NO
OM
PK
PW
PS
PA
PG
PY
PE
PH
PN
PL
PT
QA
RE
RO
RU
RW
BL
SH
KN
LC
MF
PM
VC
WS
SM
ST
SA
SN
RS
SC
SL
SG
SX
SK
SI
SB
SO
ZA
GS
SS
ES
LK
SD
SR
SZ
SJ
SE
CH
SY
TW
TJ
TZ
TH
TL
TG
TK
TO
TT
TN
TR
TM
TC
TV
UG
UA
AE
GB
UM
UY
UZ
VU
VE
VN
VG
VI
WF
EH
YE
ZM
ZW
Canada
CA
#### Inferred Country List
Afghanistan
Aland Islands
Albania
Algeria
American Samoa
Andorra
Angola
Anguilla
Antarctica
Antigua and Barbuda
Argentina
Armenia
Aruba
Australia
Austria
Azerbaijan
Bahamas
Bahrain
Bangladesh
Barbados
Belarus
Belgium
Belize
Benin
Bermuda
Bhutan
Bolivia
Bolivia, Plurinational State Of
Bonaire, Saint Eustatius and Saba
Bosnia and Herzegovina
Botswana
Bouvet Island
Brazil
British Indian Ocean Territory
Brunei Darussalam
Bulgaria
Burkina Faso
Burundi
Cape Verde
Cambodia
Cameroon
Cayman Islands
Central African Republic
Chad
Chile
China
Macau
Christmas Island
Cocos (Keeling) Islands
Colombia
Comoros
Congo
Congo, The Democratic Republic of the
Cook Islands
Costa Rica
Cote D'Ivoire
Croatia
Cuba
Curacao
Cyprus
Czech Republic
Denmark
Djibouti
Dominica
Dominican Republic
Ecuador
Egypt
El Salvador
Equatorial Guinea
Eritrea
Estonia
Ethiopia
Falkland Islands
Faroe Islands
Fiji
Finland
France
French Guiana
French Polynesia
French Southern Territories
Gabon
Gambia
Georgia
Ghana
Gibraltar
Greece
Greenland
Grenada
Guadeloupe
Guam
Guatemala
Guernsey
Guinea
Guinea-Bissau
Guyana
Haiti
Heard Island and McDonald Islands
Holy See (Vatican City State)
Honduras
Hong Kong
Hungary
Iceland
India
Indonesia
Iran, Islamic Republic of
Iraq
Ireland
Isle of Man
Israel
Italy
Jamaica
Japan
Jersey
Jordan
Kazakhstan
Kenya
Kiribati
North Korea
South Korea
Korea, Republic of
Kuwait
Kyrgyzstan
Laos
Lao People's Democratic Republic
Latvia
Lebanon
Lesotho
Liberia
Libya
Liechtenstein
Lithuania
Luxembourg
Macao
Macedonia
Macedonia, The Former Yugoslav Republic Of
North Macedonia
Madagascar
Malawi
Malaysia
Maldives
Mali
Malta
Marshall Islands
Martinique
Mauritania
Mauritius
Mayotte
Mexico
Micronesia
Moldova, Republic of
Monaco
Mongolia
Montenegro
Montserrat
Morocco
Mozambique
Myanmar
Namibia
Nauru
Nepal
Netherlands
New Caledonia
New Zealand
Nicaragua
Niger
Nigeria
Niue
Norfolk Island
Northern Mariana Islands
Norway
Oman
Pakistan
Palau
Palestine, State Of
Palestinian Territory
Panama
Papua New Guinea
Paraguay
Peru
Philippines
Pitcairn
Poland
Portugal
Qatar
Reunion
Romania
Russian Federation
Rwanda
Saint Barthélemy
Saint Helena, Ascension and Tristan da Cunha
Saint Kitts and Nevis
Saint Lucia
Saint Martin (French part)
Saint Pierre and Miquelon
Saint Vincent and the Grenadines
Samoa
San Marino
Sao Tome and Principe
Saudi Arabia
Senegal
Serbia
Seychelles
Sierra Leone
Singapore
Sint Maarten (Dutch part)
Slovakia
Slovenia
Solomon Islands
Somalia
South Africa
South Georgia and the South Sandwich Islands
South Sudan
Spain
Sri Lanka
Sudan
Suriname
Swaziland
Eswatini
Svalbard and Jan Mayen
Sweden
Switzerland
Syrian Arab Republic
Taiwan
Taiwan, Province Of China
Tajikistan
Tanzania, United Republic of
Thailand
Timor-Leste
Togo
Tokelau
Tonga
Trinidad and Tobago
Tunisia
Turkey
Turkmenistan
Turks and Caicos Islands
Tuvalu
Uganda
Ukraine
United Arab Emirates
United Kingdom
United States Minor Outlying Islands
Uruguay
Uzbekistan
Vanuatu
Venezuela
Venezuela, Bolivarian Republic Of
Viet Nam
Vietnam
Virgin Islands, British
Virgin Islands, U.S.
Wallis and Futuna
Western Sahara
Yemen
Zambia
Zimbabwe
AF
AX
AL
DZ
AS
AD
AO
AI
AQ
AG
AR
AM
AW
AU
AT
AZ
BS
BH
BD
BB
BY
BE
BZ
BJ
BM
BT
BO
BQ
BA
BW
BV
BR
IO
BN
BG
BF
BI
CV
KH
CM
KY
CF
TD
CL
CN
CX
CC
CO
KM
CG
CD
CK
CR
CI
HR
CU
CW
CY
CZ
DK
DJ
DM
DO
EC
EG
SV
GQ
ER
EE
ET
FK
FO
FJ
FI
FR
GF
PF
TF
GA
GM
GE
GH
GI
GR
GL
GD
GP
GU
GT
GG
GN
GW
GY
HT
HM
VA
HN
HK
HU
IS
IN
ID
IR
IQ
IE
IM
IL
IT
JM
JP
JE
JO
KZ
KE
KI
KP
KR
KW
KG
LA
LV
LB
LS
LR
LY
LI
LT
LU
MO
MK
MG
MW
MY
MV
ML
MT
MH
MQ
MR
MU
YT
MX
FM
MD
MC
MN
ME
MS
MA
MZ
MM
NA
NR
NP
NL
NC
NZ
NI
NE
NG
NU
NF
MP
NO
OM
PK
PW
PS
PA
PG
PY
PE
PH
PN
PL
PT
QA
RE
RO
RU
RW
BL
SH
KN
LC
MF
PM
VC
WS
SM
ST
SA
SN
RS
SC
SL
SG
SX
SK
SI
SB
SO
ZA
GS
SS
ES
LK
SD
SR
SZ
SJ
SE
CH
SY
TW
TJ
TZ
TH
TL
TG
TK
TO
TT
TN
TR
TM
TC
TV
UG
UA
AE
GB
UM
UY
UZ
VU
VE
VN
VG
VI
WF
EH
YE
ZM
ZW
Asia/Pacific Region
Europe
Canada
CA

### 2b. Unknown
**Smart List:**
*Advanced Filter Logic: 1 and (2 or 3)*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216121243.png)
#### Inferred Country List
Anonymous Proxy
Satellite Provider
Unknown

### 200 - Opt-In: Controller
**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216121357.png)
**Flow:** 
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216121420.png)

### 210 - Opt-In: Explicit Consent Captured
**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216121540.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216121559.png)

### 220 - Opt-In: Implied Consent - Legacy
This trigger helped managed initial loading of compliance data by enabling the business to "grandfather in" records who it previously had been emailing but not necessarily gathered consent for. This trigger *will* deprecate itself after the 6 month wait, and is generally safe to remove from the program once you've completed the initial compliance load out.

> [!warning] Consult with your legal team on this one
> The general idea here is that if you've already been emailing these folks with no issues, it's probably safe to continue doing so... But every company has different thresholds for "acceptable risk," and if you're reading this you're *probably not* a lawyer. Don't assume, get their official take.

**Smart List:**
*Advanced Filter Logic: 1 and (2 or 3) and 4*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216121631.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216121931.png)

### 280 - Opt-In: No Consent
**Smart List:**
*Advanced Filter Logic: 1 and (2 or 3)*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216123011.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216123041.png)


### 290 - Opt-In: No Consent
Similar to the above alert mechanism, the only thing different about this flow is that it adds members to a different list.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216123907.png)


### 220 - Smart Lists
#### 220 - Opt-In: Implied Consent - Legacy Records Engaged in Past Year
This list serves as the basis for how to add legacy records with no compliance record to your allow list. Similar to above cautions, consult with your legal team about the appropriateness of this approach for your business.

**Smart List**
*Advanced Filter Logic: 1 and 2 and (3 or 4 or 5 or 6) and (7 or 8)*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216124133.png)
### 200 - Static Lists
* 210 - Opt-In: Explicit Consent Captured
* 220 - Opt-In: Implied Consent - Legacy
* 280 - Opt-In: No Consent
* 290 - Opt-in: ERROR

## 03 - Double Opt-in (2x consent required)
This one is for *ze Germans*. It ensures that after providing explicit consent, an email is sent that requires recipients to confirm their intention to opt-in once again.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216131612.png)
### 03. Double Opt-In

**Smart List:**
*Advanced Filter Logic: 1 or (2 and 3)*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216131209.png)
### 300 - DOI: Controller
**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216131449.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216131635.png)
### 310 - DOI: Initial Explicit Consent Captured
**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216132825.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216132859.png)
### 311 - DOI: Send Double Opt-In Email
**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216133219.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216133244.png)
> [!note] 2nd Send Optimization
> In hindsight, one change I'd make here is to only send the 2nd reminder if the first hadn't been engaged with.
### 312 - DOI: Double Opt-In Confirmed (Triggered)
**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216134017.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216134051.png)
### 320 - Double Opt-In: Implied Consent - Legacy
This campaign is intended for initial loadout of implied consent for people legal has granted an exception to "grandfather in" to continued marketing emails. As with similar campaigns above, consult your legal team for guidance appropriate for your business.
**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220122850.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220122926.png)
### 380 - DOI: No Consent
This campaign processes persons under the 3. Double Opted-In schema who have not Explicitly Opted-In, to ensure that they are Unsubscribed with an Unsubscribe Reason of Privacy Compliance and that they are evaluated to determine if they're eligible for removal based on guidance from your legal team. It is requested when leads are initially sorted into the GDPR privacy policy or if persons transition into GDPR due to changes in their Privacy Compliance segment.

**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220123301.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220123328.png)
### 390 - DOI: ERROR
This campaign is requested by 300 - DOI: Controller as the default choice if the person doesn't qualify for the other campaigns. It will send an alert indicating that the lead could not be properly processed. It isn't expected that this will ever be requested though, as the others rely on opposite values of the Boolean Compliance - Explicit Opt-In field.

The smart list is a simple request campaign trigger and the flow is identical to other error campaigns above.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220124229.png)

### 300 DOI Assets
This folder consists of one email and 2 landing pages. Your templates likely look different, however the flow is simple:

1. The email links to the confirmation landing page
2. Clicking the confirm your subscription button on the landing page sends people to the thank you page.
	1. The reason this click is required is because relying on a "clicks link in email" trigger can be prone to error. Automated link scanners (i.e. for security) can sometimes appear to Marketo as a click. By requiring another action on-page, this is a more responsible way to certify that the human on the other end of this email intentionally performed the proper opt-in action.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220124309.png%7C300)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220124513.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220124458.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220124527.png)

### 300 Smart Lists
#### 320 - DOI: Implied Consent - Legacy Records Engaged in Past Year
This list, paired with the below flow, is a means of marking which records you want to "grandfather in" to your consent policy. This is an optional and risk-forward way of assessing opt-in, so again... CONSULT WITH YOUR LEGAL TEAM.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220124819.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220124841.png)
### 300 Static Lists
- 310 - DOI: Initial Explicit Consent Confirmed
- 312 - DOI: Double Opt-In Confirmed
- 320 - DOI: Implied Consent - Legacy
- 380 - DOI: No Consent
- 390 - DOI: ERROR
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220124956.png%7C300)
## 04. History/Data Request/Withdrawal of Consent
### 400 - Consent History
This campaign is triggered by a change in Consent Status. It concatenates Consent History.

**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220125123.png)
**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220125139.png)

Choice 1: `{{system.dateTime}} {{lead.Compliance - Consent Status}} - {{lead.utm_source}} {{lead.utm_medium}} {{lead.utm_campaign}}`

Choice 2: `{{lead.Compliance - Consent History}} | {{system.dateTime}} {{lead.Compliance - Consent Status}} - {{lead.utm_source}} {{lead.utm_medium}} {{lead.utm_campaign}}`

### 401 - User Unsubscribe
This campaign reconciles related field values when a user unsubscribes.

**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220125509.png)
Reason Not Contains: 
`Privacy Compliance
`System flow action sysActionChangeDataValue resetLeadEmailStatus
`System flow action sysActionChangeDataValue updateLeadEmailStatus
`System flow action sysActionChangeDataValue updatePersonEmailStatus
`System flow action sysActionChangeDataValue resetPersonEmailStatus`

**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220125726.png)
### 440 - Durable Unsubscribe Correction
**Smart List:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220125902.png)
Reason is:
`System flow action sysActionChangeDataValue resetLeadEmailStatus
`System flow action sysActionChangeDataValue updateLeadEmailStatus
`System flow action sysActionChangeDataValue updatePersonEmailStatus
`System flow action sysActionChangeDataValue resetPersonEmailStatus

**Flow:**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220125941.png)


## Z. Dev
This folder contains a number of items, such as error email alerts, reports, and supporting smart lists.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220130247.png%7C300)
### Emails
The email alerts use standard tokens. Your templates may look slightly different, but the content should be the same.

**Error Alert - Consent**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220130820.png)
**Error Alert - Sorting**
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220131029.png)
### Retroprocessing
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220130426.png)
Additionally, the retroprocessing folder contains a series of jobs to help process the initial load of compliance data. You'll need to size these up in your own database, but a sample smart campaign here looks like the below. This simply takes a portion of the database and processes them through the sorting program.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220130401.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220130443.png)

#### Explicit Opt-In Date Backfill Batches
It may be necessary to backfill an opt-in date for explicit opt-ins. The date you choose will be the day you run a specific batch and simply establishes a record of explicit opt-in, even if the date is lost to history.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220131135.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220131237.png)
#### Opt-Out previously unsubscribed
In the event that your database has records that were unsubscribed prior to privacy compliance go-live, they did not have the requisite explicit opt-in = "no" filter for the No Consent campaign. This batch can fix that:
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220131525.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240220131537.png)
