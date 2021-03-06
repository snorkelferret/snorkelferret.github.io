window.data={ DOM: "Content",
     	     sortOrder: ["maturity","stock"],
	     object: "Blotter",
	     id: "Blotter",
	     display: "grid",
      	     groupBy: "class", 
	     uniqueKey: ["stock"],
             cols: [ {name: "stock",type: "string",editable: false}, 
	       	     {name:"bid",type: "float",editable: false,step: 0.1,precision: 3,required: false},
                     {name: "offer",type: "float",editable: false, step: 0.1,precision: 3,required: false},	
                     {name:"client_bid",type:"integer",editable: false,required: false},  
                     {name: "volume",type: "integerArray",size:2, delimiter: "X", editable: false,required: false},           
                     {name:"client_offer",type:"integer",editable: false,required: false},              
                     {name: "maturity",type: "date",editable: false,display: false},           
	       	     {name: "class",type:"string",editable: false,display: false}
	       	     
		    ],
	    rows:[	
		  
     
{stock: "AAB" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2017-03-27" ,class: "index_linked" },
{stock: "AAC" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2018-04-22" ,class: "swaps" },
{stock: "AAD" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2019-02-14" ,class: "swaps" },
{stock: "AAE" ,bid:  137.060  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2020-11-17" ,class: "index_linked" },
{stock: "AAF" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2021-12-18" ,class: "swaps" },
{stock: "AAG" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2022-07-07" ,class: "straight" },
{stock: "AAH" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2023-08-26" ,class: "swaps" },
{stock: "AAI" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2024-05-05" ,class: "index_linked" },
{stock: "AAJ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2025-05-05" ,class: "linkers" },
{stock: "AAK" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2026-04-10" ,class: "linkers" },
{stock: "AAL" ,bid:  null  , offer:  237.519 , client_bid:null, volume:[], client_offer:null,maturity: "2027-06-06" ,class: "straight" },
{stock: "AAM" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2028-03-27" ,class: "index_linked" },
{stock: "AAN" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2029-08-26" ,class: "swaps" },
{stock: "AAO" ,bid:  226.060  , offer:  221.647 , client_bid:null, volume:[], client_offer:null,maturity: "2030-07-07" ,class: "index_linked" },
{stock: "AAP" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2031-11-29" ,class: "index_linked" },
{stock: "AAQ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2032-11-17" ,class: "linkers" },
{stock: "AAR" ,bid:  186.930  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2033-06-24" ,class: "swaps" },
{stock: "AAS" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2034-07-19" ,class: "index_linked" },
{stock: "AAT" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2035-06-18" ,class: "straight" },
{stock: "AAU" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2036-10-28" ,class: "index_linked" },
{stock: "AAV" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2037-10-04" ,class: "straight" },
{stock: "AAW" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2038-11-23" ,class: "swaps" },
{stock: "AAX" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2039-11-29" ,class: "swaps" },
{stock: "AAY" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2040-08-14" ,class: "index_linked" },
{stock: "AAZ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2041-01-13" ,class: "linkers" },
{stock: "ABA" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2016-01-01" ,class: "index_linked" },
{stock: "ABB" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2017-03-09" ,class: "straight" },
{stock: "ABC" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2018-05-05" ,class: "straight" },
{stock: "ABD" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2019-09-09" ,class: "linkers" },
{stock: "ABE" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2020-08-26" ,class: "straight" },
{stock: "ABF" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2021-05-11" ,class: "index_linked" },
{stock: "ABG" ,bid:  101.010  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2022-06-12" ,class: "index_linked" },
{stock: "ABH" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2023-06-30" ,class: "linkers" },
{stock: "ABI" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2024-07-13" ,class: "straight" },
{stock: "ABJ" ,bid:  69.150  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2025-12-06" ,class: "linkers" },
{stock: "ABK" ,bid:  86.940  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2026-03-15" ,class: "straight" },
{stock: "ABL" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2027-06-18" ,class: "swaps" },
{stock: "ABM" ,bid:  null  , offer:  218.980 , client_bid:null, volume:[], client_offer:null,maturity: "2028-11-05" ,class: "index_linked" },
{stock: "ABN" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2029-09-09" ,class: "straight" },
{stock: "ABO" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2030-05-11" ,class: "index_linked" },
{stock: "ABP" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2031-01-01" ,class: "index_linked" },
{stock: "ABQ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2032-05-23" ,class: "linkers" },
{stock: "ABR" ,bid:  null  , offer:  41.607 , client_bid:null, volume:[], client_offer:null,maturity: "2033-03-03" ,class: "linkers" },
{stock: "ABS" ,bid:  90.690  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2034-06-30" ,class: "swaps" },
{stock: "ABT" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2035-12-30" ,class: "swaps" },
{stock: "ABU" ,bid:  null  , offer:  29.235 , client_bid:null, volume:[], client_offer:null,maturity: "2036-01-01" ,class: "swaps" },
{stock: "ABV" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2037-07-19" ,class: "linkers" },
{stock: "ABW" ,bid:  150.120  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2038-09-03" ,class: "straight" },
{stock: "ABX" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2039-10-10" ,class: "swaps" },
{stock: "ABY" ,bid:  146.330  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2040-02-14" ,class: "index_linked" },
{stock: "ABZ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2041-06-06" ,class: "index_linked" },
{stock: "ACA" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2016-10-10" ,class: "linkers" },
{stock: "ACB" ,bid:  267.090  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2017-06-30" ,class: "swaps" },
{stock: "ACC" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2018-03-03" ,class: "straight" },
{stock: "ACD" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2019-07-07" ,class: "straight" },
{stock: "ACE" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2020-05-23" ,class: "linkers" },
{stock: "ACF" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2021-11-05" ,class: "linkers" },
{stock: "ACG" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2022-08-26" ,class: "straight" },
{stock: "ACH" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2023-07-25" ,class: "straight" },
{stock: "ACI" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2024-10-16" ,class: "index_linked" },
{stock: "ACJ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2025-04-10" ,class: "swaps" },
{stock: "ACK" ,bid:  26.360  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2026-05-17" ,class: "linkers" },
{stock: "ACL" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2027-09-21" ,class: "index_linked" },
{stock: "ACM" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2028-06-30" ,class: "swaps" },
{stock: "ACN" ,bid:  181.280  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2029-05-29" ,class: "index_linked" },
{stock: "ACO" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2030-08-02" ,class: "linkers" },
{stock: "ACP" ,bid:  89.740  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2031-07-25" ,class: "straight" },
{stock: "ACQ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2032-03-03" ,class: "linkers" },
{stock: "ACR" ,bid:  null  , offer:  66.274 , client_bid:null, volume:[], client_offer:null,maturity: "2033-11-29" ,class: "straight" },
{stock: "ACS" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2034-04-28" ,class: "linkers" },
{stock: "ACT" ,bid:  236.690  , offer:  232.068 , client_bid:null, volume:[], client_offer:null,maturity: "2035-02-20" ,class: "straight" },
{stock: "ACU" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2036-08-26" ,class: "straight" },
{stock: "ACV" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2037-07-07" ,class: "swaps" },
{stock: "ACW" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2038-04-10" ,class: "linkers" },
{stock: "ACX" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2039-05-05" ,class: "linkers" },
{stock: "ACY" ,bid:  64.800  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2040-09-21" ,class: "swaps" },
{stock: "ACZ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2041-12-18" ,class: "swaps" },
{stock: "ADA" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2016-05-29" ,class: "straight" },
{stock: "ADB" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2017-10-28" ,class: "straight" },
{stock: "ADC" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2018-01-01" ,class: "straight" },
{stock: "ADD" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2019-06-30" ,class: "linkers" },
{stock: "ADE" ,bid:  244.730  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2020-02-14" ,class: "straight" },
{stock: "ADF" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2021-07-01" ,class: "swaps" },
{stock: "ADG" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2022-12-12" ,class: "index_linked" },
{stock: "ADH" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2023-02-14" ,class: "index_linked" },
{stock: "ADI" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2024-10-22" ,class: "straight" },
{stock: "ADJ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2025-11-11" ,class: "index_linked" },
{stock: "ADK" ,bid:  16.520  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2026-05-23" ,class: "swaps" },
{stock: "ADL" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2027-08-26" ,class: "swaps" },
{stock: "ADM" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2028-05-17" ,class: "straight" },
{stock: "ADN" ,bid:  null  , offer:  275.843 , client_bid:null, volume:[], client_offer:null,maturity: "2029-03-15" ,class: "index_linked" },
{stock: "ADO" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2030-02-08" ,class: "swaps" },
{stock: "ADP" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2031-05-23" ,class: "straight" },
{stock: "ADQ" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2032-07-13" ,class: "straight" },
{stock: "ADR" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2033-07-25" ,class: "straight" },
{stock: "ADS" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2034-05-29" ,class: "linkers" },
{stock: "ADT" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2035-03-03" ,class: "straight" },
{stock: "ADU" ,bid:  null  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2036-07-25" ,class: "index_linked" },
{stock: "ADV" ,bid:  null  , offer:  66.892 , client_bid:null, volume:[], client_offer:null,maturity: "2037-02-02" ,class: "index_linked" },
{stock: "ADW" ,bid:  173.350  , offer:  null , client_bid:null, volume:[], client_offer:null,maturity: "2038-04-16" ,class: "linkers" }
]};
