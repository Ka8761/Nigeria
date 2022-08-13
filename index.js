
 $("#hideme").click(function(){
    $(".alert").animate({opacity: 0});
 });
const picturesOfPresident = ["images\\abubakar.jpg","images\\azikiwe.jpg", "images\\balewatafewa.jpg",
"images\\buhari.jpg", "images\\babangida.jpg", "images\\ironsi.jpg ",
"images\\jonathan.jpg", "images\\mortalamohammed.jpg", "images\\peterobi.jpg",
"images\\obasanjo.jpg", "images\\saniabacha.jpg", "images\\sheushagari.jpg", "images\\shoneken.jpg",
"images\\yakubuGowon.jpg", "images\\yaradua.jpg"];

$("#logo").click(function(){
    // let nameOfPresident = $(".name").html();
    // let workOfPresident = $(".works").html();
    const randomSrc = Math.floor((Math.random() * picturesOfPresident.length));
    $(".picture").attr("src", picturesOfPresident[randomSrc]);
    console.log(picturesOfPresident[randomSrc]);
     
switch(randomSrc){
    case 0: 
    $(".name").html("GENERAL ABDULSALAMI ALHAJI ABUBAKAR");
    $(".works").html(`Following the sudden death of Abacha in June 1998, Abubakar was sworn in as Nigeria’s head of state.
    Like many other Nigerian military leaders, he promised a return to civilian government, but, unlike all except Olusegun Obasanjo, he kept his promise. Although Abubakar dissolved the political parties Abacha had established (Abacha had been a presidential candidate for every party), he did establish a plan for multiparty elections, and he set May 29, 1999, as the swearing-in date for the new civilian president. Confidence in Abubakar’s plan was strengthened when Nobel laureate Wole Soyinka returned home after four years in self-exile. As promised, presidential elections were held in January 1999, and Abubakar handed the government over to the winner, Obasanjo, on the promised date. He retired from the military and returned home to Minna.`);
    break;
    case 1: 
    $(".name").html("CHIEF BENJAMIN NNAMDI AZIKIWE");
    $(".works").html(`Nnamdi Azikiwe was the first President of Nigeria and was instrumental in founding a string of newspapers across Nigeria. He shared power with the newly elected Prime Minister Abubakar Balewa.
    A military coup ousted Nigeria’s government on January 16, 1966. That coup was part of a series of events that led to the Nigerian Civil War between 1967 and 1970. Nnamdi Azikiwe became the most recognized spokesman for the Igbo struggle for independence when they attempted to craft the nation of Biafra from the eastern states that seceded from Nigeria. Two years after the war ended in a Federal victory over the Biafra rebels, the central government in Lagos allowed Azikiwe to reenter public life. 
    In 1972 he became the Chancellor of the University of Lagos, a post he held until 1976.`);
    break;
    case 2: 
    $(".name").html("ALHAJI ABUBAKAR TAFAWA BALEWA");
    $(".works").html(`He gave a famous and impassioned speech at the colony’s Northern House of Assembly in 1946 calling for a radical change in the Native Administration and its relations with Great Britain. Soon after this speech, the British restructured the Native Authority for self-rule and eventually Nigerian independence. In 1955 Balewa was appointed Federal Minister of Works and Transport by Nigeria’s Colonial Governor, Sir James Wilson Robertson. When Nigeria was granted self-governance in 1957 Balewa became Prime Minister. 3 years later, he was knighted by Queen Elizabeth of Great Britain.
    As Prime Minister Balewa helped shape the early foreign policy of Nigeria. In his days, he persuaded other British Commonwealth nations to expel South Africa because of its apartheid policies. Balewa, who worked to develop Nigeria’s transport systems by helping to build ports, river transport systems, and railways was one of the African leaders who encouraged the formation of the Organization of African Unity (OAU). `)
    break;
    case 3: 
    $(".name").html("MAJOR-GENERAL MUHAMMADU BUHARI");
    $(".works").html(`In his first tenure, he took a tough stance on corruption, hundreds of politicians and business officials were tried and convicted or awaited trial on corruption-related charges. His regime launched the “War Against Indiscipline,” a program which sought to promote positive values in Nigerian society, although authoritarian methods were sometimes used in the program’s implementation. In an effort to stop dissent against his policies, Buhari instituted restrictions on the press, political freedoms, and trade unionists.
    In the second tenure, progress under Buhari was mixed. The struggle with Boko Haram factions continued. While the military initially experienced success in curbing the groups, the militants bounced back, and attacks escalated. Furthermore, Buhari’s government faced security threats in the southeastern part of the country from militants seeking to disrupt oil production as well as from Biafran secessionists. His administration’s war on corruption was both praised for its progress and criticized for focusing more on political opponents than on allies.`);
    break;
    case 4: 
    $(".name").html("GENERAL IBRAHIM BADAMASI BABANGIDA");
    $(".works").html(`Babangida once announced that Nigeria had suspended its membership in the Islamic Conference Organization amid speculation among southern Nigerians that he was trying to make the country Islamic. 
    Earlier on, he rose through the ranks and was known for his courage—he played a major role in suppressing an attempted coup in 1976 when he walked into a rebel-held radio station unarmed. The long-planned transfer of the federal capital from Lagos to Abuja, a location in central Nigeria, was completed under Babangida in 1991.
    The fulfilment of Babangida’s pledge of a return to civilian government seemed imminent when a presidential election was finally held in 1993`);
    break;
    case 5: 
    $(".name").html("MAJOR GENERAL JOHNSON THOMAS UMUNNAKWE AGUIYI IRONSI");
    $(".works").html(`An Igbo from Umuahia, he joined the Nigerian army in 1942 and received military training in England. Aguiyi-Ironsi headed the Nigerian contingent during the post-independence conflicts in Congo (Kinshasa) in the 1960s, becoming (1963) commander of the United Nations forces there. He was made head of the Nigerian army in 1965. Following a military coup in January, 1966, President Nnamdi Azikiwe was deposed and Aguiyi-Ironsi became head of a military government. He served only six months before being assassinated in another coup. He was succeeded by Yakubu Gowon as the military head of state. During his short term in office, Aguiyi-Ironsi suspended much of the constitution, but also removed certain restrictions on freedom of the press and attempted to unify the country's foreign policy.`);
    break;
    case 6: 
    $(".name").html("DR. GOODLUCK EBELE JONATHAN");
    $(".works").html(`His successful Transformational Agenda led the implementation of projects and policies targeted at promoting development across different areas of the economy. Under his watch, Nigeria experienced unprecedented economic growth and became the largest economy in Africa. As President, he promoted democratic values and principles, peace and national security. 
    He worked with his colleagues particularly Heads of States in the ECOWAS to resolve the political crisis. His commitment and passion towards bringing peace and stability to Africa within his five-year tenure gave Nigeria more recognition in the United Nations Security Council. Nigeria was nominated twice, a feat very rarely achieved by non-permanent members of the UN Security Council. Dr. Jonathan was also given the highest national honour by several African Presidents of their countries equivalent to the GCFR in Nigeria for his commitment to stabilizing democracy in the ECOWAS.`);
    break;
    case 7: 
    $(".name").html("GENERAL MURTALA RAMAT MOHAMMED");
    $(".works").html(`After 1966 coup, Murtala was posted to the army headquarters in Lagos as a lieutenant colonel and appointed inspector of signals. The coup was seen as targeting the north, while Aguiyi Ironsi, an Igbo military officer who emerged as the head of state, was accused of favouring the Igbo ethnic group of the southeast and parts of the south-south.
    A counter-coup was eventually carried out to target thousands of Igbo officers. Murtala was seen as a significant force in this coup, which paved the way for the emergence of Yakubu Gowon’s regime, the one that led Nigeria into and out of the 1967–1970 civil war.
    In his inaugural speech as Nigeria’s head of state on 30 July 1975, a few years AFTER HE HAD LED NIGERIAN TROOPS IN KILLING THOUSANDS OF IGBOS  – also during the Asaba massacre – Murtala announced a number of measures, each accompanied by the phrase ‘with immediate effect’. He warned that Nigeria risked more chaos and bloodshed if things did not improve and if the government still failed to “fulfil the legitimate expectations of our people.”
    He was stuck and murdered – in Lagos traffic.`);
    break;
    case 8: 
    $(".name").html("PETER OBI");
    $(".works").html(`Just six months after he moved into the governor’s mansion, Obi was impeached by the state house of assembly. Obi said this was because he refused to inflate the state budget. He appealed, and the impeachment was overturned allowing him to continue from 9 February to 29 May 2007.
    Anambra state under Oni’s governorship was rated by the Debt Management Office (DMO) as the least indebted; the Senate judged it the most financially stable state.

    Obi’s administration won the Bill and Melinda Gates Foundation prize of $1m for the best-performing state on immunisation in the southeast.
    This money was used with churches to expand healthcare, building ten maternal and childcare centres, mostly in rural areas.  Obi also won praise for investing in education, building more schools and connecting more to the internet.`);
    break;
    case 9: 
    $(".name").html("GENERAL OLUSEGUN AREMU OKIKIOLA MATTHEW OBASANJO ");
    $(".works").html(`During General Sani Abacha’s regime, Obasanjo spoke out against the human rights abuses and got slammed with 30 years.
    In 1999, Obasanjo ran for presidency as a civilian under the Peoples Democratic Party (PDP) and won the election In 2003 again, he ran for a second term and won the elections defeating General Muhammadu Buhari (Nigeria’s current president.) During his tenures, he established the Niger Delta Development Commission; implemented the Universal Basic Education; constituted both the Independent Corrupt Practices Commission and the Economic and Financial Crimes Commission; resuscitated the National Fertilizer Company in Kaduna and (Onne) Port Harcourt; secured debt pardons among others.
    After his failed attempt at a “Third Term Agenda,” he stepped down as Nigeria’s president in 2007.
    Since then, the elder state spokesman has become influential in Africa’s politics so that his words command attention.`);
    break;
    case 10: 
    $(".name").html("GENERAL SANI ABACHA");
    workOfPresident = `Sani Abacha was a military dictator who led Nigeria from 1993 to 1998, and is remembered for the ruthlessness and corruption of his leadership.
    He and his family siphoned over $1 billion USD from the state, and he oversaw a level of unprecedented state-directed violence, most notably captured in the execution of peaceful environmental rights activist Ken Saro-Wiwa on trumped-up charges. Abacha dissolved Nigeria’s democratic institutions, including the  national assembly, banned political parties, and replaced state governors with military commanders.
    Though a Muslim from the northern city of Kano, his death prompted wild speculation as to Abacha’s religious practices, with claims that the grounds of his home contained numerous shrines containing human and animal body parts used in religious rituals—linking images of corruption, violence, libidinal excess, and the occult.`
    break;
    case 11: 
    $(".name").html("SHEHU USMAN ALIYU SHAGARI");
    $(".works").html(`Nigeria was badly shaken by the international economic crisis of the early 1980s.
    Shagari took several steps to try to strengthen the economy—cutting the budget, calling in the International Monetary Fund, and expelling two million aliens (mostly Ghanaians) in 1983. He won the bitterly contested presidential elections in 1983, but the state of the economy and corruption in his administration worsened, and on December 31, 1983, a military coup led by Maj. Gen. Muhammad Buhari toppled the government, and Shagari was arrested. Shagari was cleared of personal corruption charges and released from detention in 1986 but was banned from participation in Nigerian politics for life.`);
    break;
    case 12: 
    $(".name").html("CHIEF ERNEST ADEKUNLE OLADEINDE SHONEKAN");
    $(".works").html(`Chief Ernest Adegunle Oladeinde Shonekan was, for more than a decade, the chairman and chief executive of the UAC conglomerate. Anyone who could sit atop the huge and complex UAC in the dual capacities of chairman of the board of directors and chief executive was reasonably good to run Nigeria.
    So influential was Shonekan that when he spoke on matters of the country’s economy, many believed that the UK (that largely owned the UAC) had spoken. 
    Shonekan might be a ‘guru’ in the world of business; placed in the arena of Nigerian politics with despicable and unrepentantly self-seeking players, he was not exactly found wanting. But he certainly didn’t cope well – and for quite understandable reasons.  In the business world, he came, he saw, he conquered; in the world of national politics, he came, he saw, did his best. But that was not at all good enough for his country. Certainly, not by the private sector standards that he helped to set.  It is regrettable that he did not document for posterity his experience in government.`)
    break;
    case 13: 
    $(".name").html("GENERAL YAKUBU GOWON");
    $(".works").html( `Gowon tried to resolve the ethnic tensions that threatened to fatally divide Nigeria. Although he was eventually successful in ending attacks against Igbo in the north, he was unable to effect a more lasting peace.
    In a final attempt to resolve the conflict, on May 27, 1967, Gowon declared a state of emergency and divided Nigeria’s four regions into 12 states. Three days later the Eastern region declared itself the independent state of Biafra, with Odumegwu Ojukwu as its leader, and armed conflict between it and the Nigerian government began in July.`);
    break;
    case 14: 
    $(".name").html("UMARU MUSA YAR'ADUA");
    $(".works").html(`He  released the local government statutory allocations of Lagos State seized by the administration of former President Olusegun Obasanjo, which he had refused to release the funds despite court judgement in favour of Lagos State. 
    He publicly revealed his declaration of assets from May (becoming the first Nigerian president to do so), according to which he had ₦856,452,892 (US$5.8 million) in assets, ₦19 million ($0.1 million) of which belonged to his wife. This disclosure, which fulfilled a pre-election promise he made, was intended to set an example for other Nigerian politicians and discourage corruption
    Yar’adua stabilised the nation and ensured the return of peace in the Niger Delta by granting pardon to former agitators through the establishment of Amnesty and Rehabilitation Programme.The militants used the window of peace created by Yar’adua to surrender their arms..
    On August 1, 2007, the Yar’adua regime announced a “Seven Point Agenda”, which includes power and energy; food security; wealth creation; transport sector; land reforms; security; and education.
    The ambitious project to dredge River Niger was pursued by the late Yar’adua but abandoned after his death. River Niger is important in terms of economic activities in the North as it is the major river that links the North to the South.`);
    break;
    default:
        nameOfPresident = "MAJOR GENERAL JOHNSON THOMAS UMUNNAKWE AGUIYI IRONSI";
        workOfPresident = `An Igbo from Umuahia, he joined the Nigerian army in 1942 and received military training in England. Aguiyi-Ironsi headed the Nigerian contingent during the post-independence conflicts in Congo (Kinshasa) in the 1960s, becoming (1963) commander of the United Nations forces there. He was made head of the Nigerian army in 1965. Following a military coup in January, 1966, President Nnamdi Azikiwe was deposed and Aguiyi-Ironsi became head of a military government. He served only six months before being assassinated in another coup. He was succeeded by Yakubu Gowon as the military head of state. During his short term in office, Aguiyi-Ironsi suspended much of the constitution, but also removed certain restrictions on freedom of the press and attempted to unify the country's foreign policy.`
}
// pictureSrc =  picturesOfPresident[randomSrc];
// console.log(pictureSrc);
}
);
let audio = new Audio("nationalanthem.mp3");
var i = 0;
$("#music").click(function(){
    i++;
    if(i % 2 !== 0){
        audio.play();
        audio.loop= true;
    }else{
        audio.pause();
    }
});
$("#bgcolor").click(function(){
    i++;
    if(i % 2 !== 0){
    $("body").css({"background-color": "white","color":"black"});
    $(".alert").css({"background-color" : "green", "color":"white"});
    $(".name").css("color","black");
    $(".works").css({"background-color" : "green", "color":"white"});
}else{
        $("body").css({"background-color": "green","color":"white"});
        $(".alert").css({"background-color" : "white", "color":"black"});
        $(".name").css("color","white");
        $(".works").css({"background-color" : "white", "color":"black"});
    }
})


