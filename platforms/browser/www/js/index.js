var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        statesArray = ['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12','S13','S14','S15','S16','S17','S18','S19','S20','S21','S22','S23','S24','S25','S26','S27','S28','S29','S30','S31','S32','S33','S34','S35','S36','S37'];
        statesInfo= {
    "S1": {"name": "Abia", "capital":"Umahia", "region": "SE", "LGANum":"17","LGAs":["Aba North","Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"], "Region": "South East", "Options":["Calabar","Owerri", "Asaba", "Ebonyi", "Awka", "Uyo", "Yenagoa"],"cOptions":["Awka", "Owerri", "Asaba", "Yenagoa", "Uyo"],"sOptions":["Imo", "Ebonyi", "Enugu", "Rivers", "Bayelsa"], "map":"ab"},
    "S2": {"name": "Adamawa", "capital":"Yola","region": "NE", "LGANum":"21","LGAs":["Demsa","Fufore", "Ganye", "Girei", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"], "Region": "North East", "Options":["Gusau","Maiduguri", "Lafia", "Zaria", "Dutse", "Lokoja", "Minna"], "map":"ad"},
    "S3": {"name": "Akwa Ibom", "capital":"Uyo", "region": "SS", "LGANum":"31","LGAs":["Abak","Eastern Obolo", "Eket", "Esit-Eket", "Essien Udim", "Etim-Ekppo", "Etinan", "Ibeno", "Ibesikpo-Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot-Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Ukanafun", "Udong-Uko", "Uruan", "Urue-Offong/Oruko", "Uyo"], "Region": "South South", "Options":["","", "", "", "", "", ""], "map":"ak"},
    "S4": {"name": "Anambra", "capital":"Awka","region": "SE" , "LGANum":"21","LGAs":["Aguata","Awka North", "Awka South", "Anambra East", "Anambra West", "Anaocha", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"], "Region": "South East", "Options":["","", "", "", "", "", ""], "map":"an"},
    "S5": {"name": "Bauchi", "capital":"Bauchi","region": "NE", "LGANum":"20","LGAs":["Bauchi","Tafawa Balewa", "Dass", "Toro", "Bogoro", "Ningi", "Warji", "Ganjuwa", "Kirfi", "Alkaleri", "Darazo", "Misau", "Giade", "Shira", "Jama'are", "Katagum", "Itas/Gadau", "Zaki", "Gamawa", "Dambam"], "Region": "North East", "Options":["","", "", "", "", "", ""], "map":"bc"},
    "S6": {"name": "Bayelsa", "capital":"Yenagoa", "region": "SS", "LGANum":"9","LGAs":["Brass","Ekeremor", "Kolok/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa", "Membe"], "Region": "South South", "Options":["","", "", "", "", "", ""], "map":"by"},
    "S7": {"name": "Benue", "capital":"Makurdi", "region": "NC", "LGANum":"22","LGAs":["Ador","Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-ala", "Konshisha", "Kwande", "Logo", "Makurdii", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Oturkpo", "Tarka", "Ukum", "Vandekya"], "Region": "North Central", "Options":["","", "", "", "", "", ""], "map":"bn"},
    "S8": {"name": "Borno", "capital":"Maiduguri", "region": "NE", "LGANum":"27","LGAs":["Abadan","Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwagubio", "Guzamala", "Gwoza", "Gubio", "Hawul", "Jere", "Kaga", "Kalka/Balge", "Konduga", "Kukawa", "Kwaya-ku", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"], "Region": "North East", "Options":["","", "", "", "", "", ""], "map":"br"},
    "S9": {"name": "Cross River", "capital":"Calabar", "region": "SS", "LGANum":"18","LGAs":["Abia","Akampa", "Akpabuyo", "Bakassi", "Bekwara", "Biase", "Boki", "Calabar south", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Ugep North", "Yala", "Yarkur"], "Region": "South South", "Options":["","", "", "", "", "", ""], "map":"cr"},
    "S10": {"name": "Delta", "capital":"Asaba", "region": "SS", "LGANum":"25","LGAs":["Ethiope East","Ethiope West", "Okpe", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Uvwie", "Aniocha North", "Aniocha South", "Ika North East", "Ika South", "Ndokwa East", "Ndokwa West", "Oshimili North", "Oshimili South", "Ukuwani", "Bomadi", "Burutu", "Isoko North", "Isoko South", "Patani", "Warri North", "Warri South", "Warri South West"], "Region": "South South", "Options":["","", "", "", "", "", ""], "map":"dt"},
    "S11": {"name": "Ebonyi", "capital":"Abakaliki", "region": "SE", "LGANum":"13","LGAs":["Abakaliki","Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"], "Region": "South East", "Options":["","", "", "", "", "", ""], "map":"eb"},
    "S12": {"name": "Edo", "capital":"Benin", "region": "SS", "LGANum":"18","LGAs":["Akoko-Edo","Egor", "Esan Central", "Esan North-East", "Esan South East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba-Okha", "Oredo", "Orhionmwon", "Ovia North-East", "Ovia South-East", "Owan East", "Owan West", "Uhunmwonde"], "Region": "South South", "Options":["","", "", "", "", "", ""], "map":"ed"},
    "S13": {"name": "Ekiti", "capital":"Ado Ekiti", "region": "SW", "LGANum":"16","LGAs":["Ado Ekiti","Ikere", "Oye", "Aiyekire(Gbonyin)", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Ido-Osi","Ijero","Ikole","Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba"], "Region": "South West", "Options":["","", "", "", "", "", ""], "map":"ek"},
    "S14": {"name": "Enugu", "capital":"Enugu", "region": "SE", "LGANum":"17","LGAs":["Aninri","Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo-Uwani"], "Region": "South East", "Options":["","", "", "", "", "", ""], "map":"eg"},
    "S15": {"name": "Gombe", "capital":"Gombe", "region": "NE", "LGANum":"11","LGAs":["Akko","Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"], "Region": "North East", "Options":["","", "", "", "", "", ""], "map":"gb"},
    "S16": {"name": "Imo", "capital":"Owerri", "region": "SE", "LGANum":"27","LGAs":["Aboh Mbaise","Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte Mbaise", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Onuimo", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West"], "Region": "South East", "Options":["","", "", "", "", "", ""], "map":"im"},
    "S17": {"name": "Jigawa", "capital":"Dutse", "region": "NW", "LGANum":"27","LGAs":["Auyo","Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"], "Region": "North West", "Options":["","", "", "", "", "", ""], "map":"jg"},
    "S18": {"name": "Kaduna", "capital":"Kaduna", "region": "NW", "LGANum":"23","LGAs":["Birnin Gwari","Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"], "Region": "North West", "Options":["","", "", "", "", "", ""], "map":"kd"},
    "S19": {"name": "Kano", "capital":"Kano", "region": "NW", "LGANum":"44","LGAs":["Fagge","Dala", "Gwale", "Kano Municipal", "Tarauni", "Nassarawa", "Kumbotso", "Ungogo", "Dawakin Tofa", "Tofa", "Rimin Gado", "Bagwai", "Gezawa", "Gabasawa", "Minjibir", "Dambatta", "Makoda", "Kunchi", "Bichi", "Tsanyawa", "Shanono", "Gwarzo", "Karaye", "Rogo", "Kabo", "Bunkure", "Kibiya", "Rano", "Tudun Wada", "Doguwa", "Madobi", "Kura", "Garunn Mallam", "Bebeji", "Kiru", "Sumaila", "Garko", "Takai", "Alabsu", "Gaya", "Ajingi", "Wudil", "Warawa", "Dawakin Kudu"], "Region": "North West", "Options":["","", "", "", "", "", ""], "map":"kn"},
    "S20": {"name": "Katsina", "capital":"Katsina", "region": "NW", "LGANum":"34","LGAs":["Bakori","Batagarawa", "Batsari", "Baure", "Bindawa", "Chanranchi", "Dan Musa", "Dandume", "Danja",  "Daura", "Dutsi", "Dutsin-Ma", "Faskari", "Funtua","Ingawa","Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumufashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"], "Region": "North West", "Options":["","", "", "", "", "", ""], "map":"kt"},
    "S21": {"name": "Kebbi", "capital":"Birnin Kebbi","region": "NW", "LGANum":"21","LGAs":["Aleiro","Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Danko/Wasagu", "Yauri", "Zuru"], "Region": "North West", "Options":["","", "", "", "", "", ""], "map":"kb"},
    "S22": {"name": "Kogi", "capital":"Lokoja","region": "NC", "LGANum":"21","LGAs":["Adavi","Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba/Bunu", "Koton Karfe", "Lokoja", "Mopa-Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamboro", "Omala", "Yagba East", "Yagba West"], "Region": "North Central", "Options":["","", "", "", "", "", ""], "map":"kg"},
    "S23": {"name": "Kwara", "capital":"Illorin", "region": "NC", "LGANum":"16","LGAs":["Asa","Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"], "Region": "North Central", "Options":["","", "", "", "", "", ""], "map":"kr"},
    "S24": {"name": "Lagos", "capital":"Ikeja","region": "SW", "LGANum":"20","LGAs":["Agege","Alimosho Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako/Ijaye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"], "Region": "South West", "Options":["","", "", "", "", "", ""], "map":"lg"},
    "S25": {"name": "Nassarawa", "capital":"Lafia","region": "NC", "LGANum":"13","LGAs":["Karu","Keffi", "Kokona", "Nasarawa", "Toto", "Akwanga", "Nasarawa Egon", "Wamba", "Awe", "Doma", "Keana", "Lafia", "Obi"], "Region": "North Central", "Options":["","", "", "", "", "", ""], "map":"ns"},
    "S26": {"name": "Niger", "capital":"Minna", "region": "NC", "LGANum":"25","LGAs":["Agaie","Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontogora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Munya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"], "Region": "North Central", "Options":["","", "", "", "", "", ""], "map":"ng"},
    "S27": {"name": "Ogun", "capital":"Abeokuta","region": "SW", "LGANum":"20","LGAs":["Abeokuta North","Abeokuta South", "Ada-Odo/Ota", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odogbolu", "Odeda", "Ogun Waterside", "Remo North", "Sagamu", "Yewa North", "Yewa South"], "Region": "South West", "Options":["","", "", "", "", "", ""], "map":"og"},
    "S28": {"name": "Ondo", "capital":"Akure","region": "SW", "LGANum":"18","LGAs":["Akoko North-East","Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"], "Region": "South West", "Options":["","", "", "", "", "", ""], "map":"od"},
    "S29": {"name": "Osun", "capital":"Oshogbo","region": "SW", "LGANum":"30","LGAs":["Aiyedaade","Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"], "Region": "South West", "Options":["","", "", "", "", "", ""], "map":"os"},
    "S30": {"name": "Oyo", "capital":"Ibadan","region": "SW", "LGANum":"33","LGAs":["Akinyele","Afijio", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South West", "Ibadan South-East", "Ibarapa Central", "Ibarapa East Eruwa", "Ido", "Irepo", "Iseyin", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Oyo West", "Atiba", "Atisbo", "Saki West", "Saki East", "Itesiwaju", "Iwajowa", "Ibarapa North", "Olorunsogo", "Oluyole", "Ogo Oluwa", "Surulere", "Orelope", "Ori Ire", "Oyo East", "Ona Ara"], "Region": "South West", "Options":["","", "", "", "", "", ""], "map":"oy"},
    "S31": {"name": "Plateau", "capital":"Jos","region": "NC", "LGANum":"17","LGAs":["Barkin Ladi","Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"], "Region": "North Central", "Options":["","", "", "", "", "", ""], "map":"pt"},
    "S32": {"name": "Rivers", "capital":"Port Harcourt","region": "SS", "LGANum":"23","LGAs":["Port Harcourt","Obio-Akpor", "Okrika", "Ogu-Bolo", "Eleme", "Tai", "Gokana", "Khana", "Oyigbo", "Opobo-Nkoro", "Andoni", "Bonny", "Degema", "Asari-Toru", "Akuku-Toru", "Abua-Odual", "Ahoada West", "Ahoada East", "Ogba-Egbema-Ndoni", "Emohua", "Ikwerre", "Etche", "Omuma"], "Region": "South South", "Options":["","", "", "", "", "", ""],"map":"rv"},
    "S33": {"name": "Sokoto", "capital":"Sokoto","region": "NW", "LGANum":"23","LGAs":["Binji","Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"], "Region": "North West", "Options":["","", "", "", "", "", ""], "map":"sk"},
    "S34": {"name": "Taraba", "capital":"Jalingo","region": "NE", "LGANum":"16","LGAs":["Ardo Kola","Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kurmi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"], "Region": "North East", "Options":["","", "", "", "", "", ""], "map":"tb"},
    "S35": {"name": "Yobe", "capital":"Damaturu","region": "NE", "LGANum":"17","LGAs":["Bade","Bursari", "Damaturu", "Geidem", "Gujba", "Gulani", "Fika", "Fune", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potsikum", "Tarmuwa", "Yunusari", "Yusufari"], "Region": "North East", "Options":["","", "", "", "", "", ""], "map":"yb"},
    "S36": {"name": "Zamfara", "capital":"Gusau","region": "NW", "LGANum":"14","LGAs":["Anka","Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Tsafe", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Zurmi"], "Region": "North West", "Options":["","", "", "", "", "", ""], "map":"zm"},
    "S37": {"name": "FCT","capital":"Abuja", "region": "NC","LGANum":"6","LGAs":["Abaji","Abuja Municipal", "Gwagwalada", "Kuje", "Bwari", "Kwali"], "Region": "North Central", "Options":["","", "", "", "", "", ""], "map":"ft"},
    "cOptions":{"NE": ["Yola", "Bauchi", "Maiduguri", "Gombe", "Jalingo", "Damaturu"], "NW": ["Dutse", "Kano", "Kaduna", "Katsina", "Birnin Kebbi", "Sokoto", "Gusau"], "NC" : ["Minna", "Lokoja", "Makurdi", "Jos", "Lafia", "Ilorin", "Abuja"], "SE": ["Enugu", "Owerri", "Abakaliki", "Umahia", "Awka"], "SS": ["Yenagoa", "Uyo", "Benin", "Port Harcourt", "Calabar", "Asaba"], "SW": ["Ibadan", "Ado Ekiti", "Oshogbo", "Akure", "Ikeja", "Abeokuta"]},
    "sOptions":{"NE": ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"], "NW": ["Jigawa", "Kano", "Kaduna", "Katsina", "Kebbi", "Sokoto", "Zamfara"], "NC" : ["Niger", "Kogi", "Benue", "Plateau", "Nassarawa", "Kwara", "Federal Capital Territory"], "SE": ["Enugu", "Imo", "Ebonyi", "Abia", "Anambra"], "SS": ["Bayelsa", "Akwa Ibom", "Edo", "Rivers", "Cross River", "Delta"], "SW": ["Oyo", "Ekiti", "Osun", "Ondo", "Lagos", "Ogun"]}
}
        
        this.capitals1="<div class='vertical-top-ui'><div class ='container'><div class='row'><div class ='col pull-left'><a href ='' id='home'><i class='fa fa-arrow-left arrow-back'></i></a></div><div class ='col' style='text-align:center; margin:0; padding:0'><h1 id ='score' style='margin:0; padding:0; color: #2980b9;display: inline;'>0</h1></div><div class ='col pull-right' style='text-align:right; color:#696D7D' id = 'lives'><i class='fa fa-heart' style='font-size:36px; color: #16a085'></i>x3</div></div></div></div><div class='vertical-center-quiz'> <div class ='container'> <center> <div class ='row' style='justify-content:center;'> <div class='col-lg-6' > <h1 style='font-family: gameFont; color:#696D7D' id ='que'></h1> </div> </div> </center> <br> <br> <div class='row' > <div class='col-lg-6' style='padding-bottom: 3px;'> <button type='button' id ='opt1c' class='btn btn-block option-initial'><h4 id ='opt1c_'></h4></button> </div> <div class='col-lg-6' style='padding-bottom: 3px;'> <button type='button' id ='opt2c', class='btn  btn-block option-initial'><h4 id ='opt2c_'></h4></button> </div> <br> <div class='col-lg-6' style='padding-bottom: 3px;'> <button type='button' id ='opt3c' class='btn  btn-block option-initial'><h4 id ='opt3c_'></h4></button> </div> <div class='col-lg-6' style='padding-bottom: 3px;'> <button type='button' id ='opt4c' class='btn btn-block option-initial'><h4 id ='opt4c_'></h4></button> </div> </div> </div></div>";
        
        this.capitals2="<div class='vertical-top-ui'><div class ='container'><div class='row'><div class ='col pull-left'><a href ='' id='home'><i class='fa fa-arrow-left arrow-back'></i></a></div><div class ='col' style='text-align:center; margin:0; padding:0'><h1 id ='score' style='margin:0; padding:0; color: #5995ED;display: inline;'>0</h1></div><div class ='col pull-right' style='text-align:right; color:#696D7D' id = 'lives'><i class='fa fa-heart' style='font-size:36px; color: #4FB286'></i>x3</div></div></div></div><div class='vertical-center-quiz'> <div class ='container'> <div class ='row' style='justify-content:center'> <div class='col-lg-6'> <img style='max-width: 100%' id='map' src='' alt=''> </div> </div> <br> <div class='row' > <div class='col-lg-6' style='padding-bottom: 3px;'> <button type='button' onclick = 'checkAnsCapital(this.id)' id ='opt1c' class='btn btn-primary btn-block' ><h4 id ='opt1c_'></h4></button> </div> <div class='col-lg-6' style='padding-bottom: 3px;'> <button type='button' onclick = 'checkAnsCapital(this.id)' id ='opt2c', class='btn btn-primary btn-block'><h4 id ='opt2c_'></h4></button> </div> <br> <div class='col-lg-6' style='padding-bottom: 3px;'> <button type='button' onclick = 'checkAnsCapital(this.id)' id ='opt3c' class='btn btn-primary btn-block'><h4 id ='opt3c_'></h4></button> </div> <div class='col-lg-6' style='padding-bottom: 3px;'> <button type='button' onclick = 'checkAnsCapital(this.id)' id ='opt4c' class='btn btn-primary btn-block'><h4 id ='opt4c_'></h4></button> </div> </div> </div></div>";
        
        this.gameover =" <div class='vertical-center-quiz' style='color:#696D7D'> <div class='container'> <div class='row'> <div class='col align-self-start'></div> <div class='col-lg-6 align-self-center'> <center> <br><br><h3 >Highscore</h3> </center> </div> <div class='col align-self-end'></div> </div> <div class='row'> <div class='col align-self-start'></div> <div class='col-lg-6 align-self-center'> <center><h1 id='best'></h1> </center> </div> <div class='col align-self-end'></div> </div><br> <br> <div class='row'> <div class='col align-self-start'></div> <div class='col-lg-6 align-self-center'> <center> <h3 >Score</h3> </center> </div> <div class='col align-self-end'></div> </div> <div class='row'> <div class='col align-self-start'></div> <div class='col-lg-6 align-self-center'> <center> <h1 id='score'></h1> </center> </div> <div class='col align-self-end'></div> </div> <div class='row'> <div class='col align-self-start'></div> <div class='col-lg-6 align-self-center'> <center> <h3 id='comment'></h3> </center> </div> <div class='col align-self-end'></div> </div> <br> <br> <br> <div class='row'> <div class='col align-self-start'></div> <div class='col-lg-6 align-self-center'> <a href='#' id='btn_restart' class='btn btn-block text-white' style='background-color:#466060'><h4>Restart</h4></a> <a href='#' id='btn_home' class='btn btn-block option-initial'><h4>Main Menu</h4></a> </div><div class='col align-self-end'></div> </div></div> </div>";
        
        this.homepage = " <div class='vertical-center-quiz'><div class ='container'> <div class='row '> <div class='col align-self-start'></div> <div class='col-lg-6 align-self-center'> <a href='#' id='btn_playcapitals1' class='btn btn-block text-white' style='background-color:#16a085'><h4>Capitals: Regular Mode</h4></a> <a href='#' id='btn_playcapitals2' class='btn btn-block text-white' style='background-color:#1abc9c'><h4>Capitals: Map Mode <kbd id='statsCapitals2'><i class='fa fa-lock'></i></kbd></h4></a> <a href='#' id='btn_playstates1' class='btn btn-block text-white' style='background-color:#16a085'><h4>States: Regular Mode</h4></a> <a href='#' id='btn_playstates2' class='btn btn-block text-white' style='background-color:#1abc9c'><h4 id='lockedStates'>States: Challenging <kbd id='statsStates2'><i class='fa fa-lock'></i></kbd></h4></a> </div> <div class='col align-self-end'></div> </div></div> </div>";
        
        this.states1= "<div class='vertical-top-ui'><div class ='container'><div class='row'><div class ='col pull-left'><a href ='' id='home'><i class='fa fa-arrow-left arrow-back'></i></a></div><div class ='col' style='text-align:center; margin:0; padding:0'><h1 id ='score' style='margin:0; padding:0; color: #5995ED;display: inline;'>0</h1></div><div class ='col pull-right' style='text-align:right; color:#696D7D' id = 'lives'><i class='fa fa-heart' style='font-size:36px; color: #4FB286'></i>x3</div></div></div></div> <div class='vertical-center-quiz'> <div class ='container'> <center> <div class ='row' style='justify-content:center'> <div class='col-lg-12' > <h1 style='font-family: gameFont;color:#696D7D' id ='que'></h1> </div> </div> </center> <br> <br> <div class='row' > <div class='col-lg-6' style='padding-bottom:3px'> <button type='button' onclick = 'checkAnsState(this.id)' id ='opt1s' class='btn btn-primary btn-block' ><h4 id ='opt1s_'></h4></button> </div> <div class='col-lg-6' style='padding-bottom:3px'> <button type='button' onclick = 'checkAnsState(this.id)' id ='opt2s', class='btn btn-primary btn-block'><h4 id ='opt2s_'></h4></button> </div> <br> <div class='col-lg-6' style='padding-bottom:3px'> <button type='button' onclick = 'checkAnsState(this.id)' id ='opt3s' class='btn btn-primary btn-block'><h4 id ='opt3s_'></h4></button> </div> <div class='col-lg-6' style='padding-bottom:3px'> <button type='button' onclick = 'checkAnsState(this.id)' id ='opt4s' class='btn btn-primary btn-block'><h4 id ='opt4s_'></h4></button> </div> </div> </div></div>";
        
        this.states2 ="<div class='vertical-top-ui'><div class ='container'><div class='row'><div class ='col pull-left'><a href ='' id='home'><i class='fa fa-arrow-left arrow-back'></i></a></div><div class ='col' style='text-align:center; margin:0; padding:0'><h1 id ='score' style='margin:0; padding:0; color: #5995ED;display: inline;'>0</h1></div><div class ='col pull-right' style='text-align:right; color:#696D7D' id = 'lives'><i class='fa fa-heart' style='font-size:36px; color: #4FB286'></i>x3</div></div></div></div> <div class='vertical-center-quiz'> <div class ='container'> <div class ='row' style='justify-content:center'> <div class='col-lg-6'> <img style='max-width: 100%' id='map' src='' alt='map'> </div> </div> <br> <div class='row' > <div class='col-lg-6' style='padding-bottom:3px'> <button type='button' onclick = 'checkAnsState(this.id)' id ='opt1s' class='btn btn-primary btn-block' ><h4 id ='opt1s_'></h4></button> </div> <div class='col-lg-6' style='padding-bottom:3px'> <button type='button' onclick = 'checkAnsState(this.id)' id ='opt2s', class='btn btn-primary btn-block'><h4 id ='opt2s_'></h4></button> </div> <br> <div class='col-lg-6' style='padding-bottom:3px'> <button type='button' onclick = 'checkAnsState(this.id)' id ='opt3s' class='btn btn-primary btn-block'><h4 id ='opt3s_'></h4></button> </div> <div class='col-lg-6' style='padding-bottom:3px'> <button type='button' onclick = 'checkAnsState(this.id)' id ='opt4s' class='btn btn-primary btn-block'><h4 id ='opt4s_'></h4></button> </div> </div> </div></div>";
        
    counter = 0;
    lives = 3;
    score = 0;
    app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        document.getElementById('content').innerHTML=this.homepage;
        NativeStorage.getItem("capitals1Best", function (result) {document.getElementById("statsCapitals1").innerHTML=result+"/37";},function (e) {});    
        document.getElementById("btn_playcapitals1").onclick = function(){
            app.loadPage("CapitalsI");
            }
        
        NativeStorage.getItem("capitals2Best", function (result) {if (result>=30){document.getElementById("statsCapitals2").innerHTML=result+"/37";}},function (e) {});    
        document.getElementById("btn_playcapitals2").onclick = function(){
            app.loadPage("CapitalsII");
            }
        
        NativeStorage.getItem("states1Best", function (result) {document.getElementById("statsStates1").innerHTML=result+"/37";},function (e) {});    
        document.getElementById("btn_playstates1").onclick = function(){
            app.loadPage("StatesI");
            }
        
        NativeStorage.getItem("states2Best", function (result) {if (result>=30){document.getElementById("statsStates2").innerHTML=result+"/37";}},function (e) {});    
        document.getElementById("btn_playstates2").onclick = function(){
            app.loadPage("StatesII");
            }
        },
    
    saveData: function (mykey, myvalue) {
        console.log("in save");
        NativeStorage.setItem(mykey,myvalue);
    },
    
    loadData: function (mykey) {
        var x=0
        NativeStorage.getItem(mykey, function (result) {x= Number(result);},function (e) {x=null;});
        console.log("X: "+ x);
        return x;
    },
    
    loadPage: function(page){  
        if ((page =="CapitalsI")||(page =="CapitalsII")){
            score=0;
            lives=3;
            counter=0;
        if (page =="CapitalsI"){
            localStorage.setItem('mode', 'CapitalsI');
            document.getElementById('content').innerHTML=this.capitals1;
                    app.loadplaycapitals();
            document.getElementById("opt1c").onclick = function(){
                app.checkAnsCapitals("opt1c");
                }
            document.getElementById("opt2c").onclick = function(){
                app.checkAnsCapitals("opt2c");
                }
            document.getElementById("opt3c").onclick = function(){
                app.checkAnsCapitals("opt3c");
                }
            document.getElementById("opt4c").onclick = function(){
                app.checkAnsCapitals("opt4c");
                }}
        else if(page =="CapitalsII"){
                localStorage.setItem('mode', 'CapitalsII');
                document.getElementById('content').innerHTML=this.capitals2;
                        app.loadplaycapitals();
            document.getElementById("opt1c").onclick = function(){
                app.checkAnsCapitals("opt1c");
                }
            document.getElementById("opt2c").onclick = function(){
                app.checkAnsCapitals("opt2c");
                }
            document.getElementById("opt3c").onclick = function(){
                app.checkAnsCapitals("opt3c");
                }
            document.getElementById("opt4c").onclick = function(){
                app.checkAnsCapitals("opt4c");
                }        
}}
        
        else if ((page=="StatesI")||(page == "StatesII")){
                score=0;
                lives=3;
                counter=0;
            if (page =="StatesI"){
                localStorage.setItem('mode', 'StatesI');
                document.getElementById('content').innerHTML=this.states1;
                        app.loadplaystates();
                document.getElementById("opt1s").onclick = function(){
                    app.checkAnsStates("opt1s");
                    }
                document.getElementById("opt2s").onclick = function(){
                    app.checkAnsStates("opt2s");
                    }
                document.getElementById("opt3s").onclick = function(){
                    app.checkAnsStates("opt3s");
                    }
                document.getElementById("opt4s").onclick = function(){
                    app.checkAnsStates("opt4s");
                    }}
            else if(page =="StatesII"){
                    localStorage.setItem('mode', 'StatesII');
                    document.getElementById('content').innerHTML=this.states2;
                            app.loadplaystates();
                document.getElementById("opt1s").onclick = function(){
                    app.checkAnsStates("opt1s");
                    }
                document.getElementById("opt2s").onclick = function(){
                    app.checkAnsStates("opt2s");
                    }
                document.getElementById("opt3s").onclick = function(){
                    app.checkAnsStates("opt3s");
                    }
                document.getElementById("opt4s").onclick = function(){
                    app.checkAnsStates("opt4s");
                    }        
    }
        }
        
        else if (page =="gameover"){
            document.getElementById('content').innerHTML=this.gameover;
            document.getElementById("btn_restart").onclick = function(){
               app.loadPage(localStorage.getItem("mode")); 
            }
            document.getElementById("btn_home").onclick = function(){
                app.receivedEvent('deviceready');
            }
        }
        },
        
    loadplaycapitals:function () {
        statesArray = app.shuffle(statesArray);
        console.log(statesArray);
        mode = localStorage.getItem('mode');
        app.nextQuestionCapitals();
    },
    
    loadplaystates:function () {
        this.statesArray = app.shuffle(statesArray);
        console.log(statesArray);
        mode = localStorage.getItem('mode');
        app.nextQuestionStates();
    },
        
    nextQuestionCapitals:function (){
        app.reset();
        console.log('count q'+ counter);
        var queKey = statesArray[counter];
        console.log('queKey'+ queKey);

                var region = statesInfo[queKey].region;
                var options_ = app.shuffle(statesInfo.cOptions[region]);
                ans = statesInfo[queKey].capital;
                var options =[];
                options.push(ans);
                console.log('ans'+options);
                for(var i =0;i<3;i++){
                   if(options_[i]==ans){
                        options.push(options_[3])
                    }
                    else{
                        options.push(options_[i])
                    }
                }
            app.shuffle(options);
                 console.log('options'+options);
                
                if(mode=="CapitalsI"){
                document.getElementById("que").innerHTML = statesInfo[queKey].name;}
                
                else if(mode=="CapitalsII"){
                    var imgkey = 'maps/'+statesInfo[queKey].map +'.png';
                document.getElementById("map").src=imgkey;
                }
                for(var i=1;i<5;i++){
                    document.getElementById("opt"+i+"c_").innerHTML = options[i-1];
                    
                }
               },
    
    nextQuestionStates: function (){
        app.reset();
        console.log('count '+ counter);
        console.log("the array: "+statesArray);
        var queKey = statesArray[counter];
        console.log('queKey'+ queKey);
        
                ans = statesInfo[queKey].name;
                var region = statesInfo[queKey].region;
                var options =[];
                var options_ = app.shuffle(statesInfo.sOptions[region]);
                options.push(ans);
                console.log('ans'+options);
                for(var i =0;i<3;i++){
                    if(options_[i]==ans){
                        options.push(options_[3])
                    }
                    else{
                        options.push(options_[i])
                    } 
                }
                app.shuffle(options);
                 console.log('mode'+mode);
                
                if(mode=="StatesI"){
                document.getElementById("que").innerHTML = statesInfo[queKey].capital;}
                
                else if(mode=="StatesII"){
                    var imgkey = 'maps/'+statesInfo[queKey].map +'.png';
                   document.getElementById("map").src=imgkey;
                    console.log(imgkey);
                }
                
                 
                for(var i=1;i<5;i++){
                    document.getElementById("opt"+i+"s_").innerHTML = options[i-1];   
                }
                console.log(statesInfo);
               },
        
        
    shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

  return array;
},
    
    reset: function(){
        if ((mode=="CapitalsI")||(mode=="CapitalsII")){
            for(var i =1; i<5;i++){
                var btn = document.getElementById("opt"+i+"c");
                btn.classList.remove("option-wrong");
                btn.classList.remove("option-correct");
                btn.classList.add("option-initial");
                btn.disabled = false;
            }
        }
        else{
            for(var i =1; i<5;i++){
                var btn = document.getElementById("opt"+i+"s");
                btn.classList.remove("option-wrong");
                btn.classList.remove("option-correct");
                btn.classList.add("option-initial");
                btn.disabled = false;
            }
        }
    },
    
    checkAnsCapitals: function(choiceid){
        counter+=1;
        console.log('count c'+ counter);
        document.getElementById(choiceid).disabled = true;
        var choice = document.getElementById(choiceid+'_').innerHTML;
        if(ans==choice){
            score+=1;
            document.getElementById('score').innerHTML = score;
            var btn = document.getElementById(choiceid);
            btn.classList.remove("option-initial");
            btn.classList.add("option-correct");
            setTimeout(app.correctCapital, 500);
        }
        else{
            lives-=1;
            if(lives>=0){
            app.colorlives();}
            var btn = document.getElementById(choiceid);
            btn.classList.remove("option-initial");
            btn.classList.add("option-wrong");
            if (lives>=0)
            {
                console.log('step 1');
                app.wrongCapitals();
            }
            else{
                app.gameoverPageC();
            }
    
        }
    },
    
    checkAnsStates: function(choiceid){
        counter+=1;
         document.getElementById(choiceid).disabled = true;
        var choice = document.getElementById(choiceid+'_').innerHTML;
        if(ans==choice){
            score+=1;
            document.getElementById('score').innerHTML = score;
            var btn = document.getElementById(choiceid);
            btn.classList.remove("option-initial");
            btn.classList.add("option-correct");
            setTimeout(app.correctState, 500);
        }
        
        else{
            lives-=1;
            if(lives>=0){
            app.colorlives();}
            var btn = document.getElementById(choiceid);
            btn.classList.remove("option-initial");
            btn.classList.add("option-wrong");
            if (lives>=0)
            {
                console.log('step 1');
                app.wrongStates();}
            else{
                app.gameoverPageS()
            }
    
        }
    },
    
    colorlives: function(){
        document.getElementById('lives').innerHTML = '<i class="fa fa-heart"  style="font-size:36px; color: #4FB286"></i>x' + lives;
    },
    
    /*correctState: function(){
        if(score>=37)
            {
                app.gamewon()
            }
        else{
                app.nextQuestionStates();
            }             
        },*/
    
    correctState: function(){
        if(score>=37)
            {
               // app.gamewon()
            }
        else{
            console.log(counter);
            console.log('count e'+ counter);
                app.nextQuestionStates();
            }             
        },
    
    correctCapital: function(){
        if(score>=37)
            {
               // app.gamewon()
            }
        else{
            console.log(counter);
            console.log('count e'+ counter);
                app.nextQuestionCapitals();
            }             
        },
    
    
    wrongCapitals: function(){
        for(var i=1;i<5;i++){
            var test = document.getElementById("opt"+i+"c_").innerHTML;
            if(test==ans) {
                var btn = document.getElementById("opt"+i+"c");
                btn.classList.remove("option-initial");
                btn.classList.add("option-correct");
                break;
            }   
        }
        console.log('count f'+ counter);
        setTimeout(app.nextQuestionCapitals, 500);
    },
    
    wrongStates: function(){
        for(var i=1;i<5;i++){
            var test = document.getElementById("opt"+i+"s_").innerHTML;
            if(test==ans) {
                var btn = document.getElementById("opt"+i+"s");
                btn.classList.remove("option-initial");
                btn.classList.add("option-correct");
                break;
            }   
        }
        console.log('count f'+ counter);
        setTimeout(app.nextQuestionStates, 500);
    },
    
    gameoverPageC:function(){
        for(var i=1;i<5;i++){
            var test = document.getElementById("opt"+i+"c_").innerHTML
            console.log(ans);
            console.log(test);
            if(test==ans) {
                var btn = document.getElementById("opt"+i+"c");
                btn.classList.remove("option-initial");
                btn.classList.add("option-correct");
                break;
            }   
        }
        setTimeout(app.showscore, 500);
    },
    
    gameoverPageS:function(){
        for(var i=1;i<5;i++){
            var test = document.getElementById("opt"+i+"s_").innerHTML
            if(test==ans) {
                var btn = document.getElementById("opt"+i+"s");
                btn.classList.remove("option-initial");
                btn.classList.add("option-correct");
                break;
            }   
        }
        setTimeout(app.showscore, 500);
    },
    
    showscore: function (){
        app.loadPage("gameover");
        app.setgameoverpage();
    },
    
    setgameoverpage: function (){
        console.log("am inside");
        
        var mode = localStorage.getItem('mode');
        var bestKey="";
        if(mode=="StatesI"){ bestKey="states1Best";}
        else if(mode=="StatesII"){ bestKey="states2Best";}
        else if(mode=="CapitalsI"){ bestKey="capitals1Best";}
        else if(mode=="CapitalsII"){ bestKey="capitals2Best";}
        var highscore;
        
        NativeStorage.getItem(bestKey, function (result) {if ((score>result)||(result==null|| !result)|| isNaN(result)){
            NativeStorage.setItem(bestKey,score)
            document.getElementById('score').innerHTML = score;
            document.getElementById('best').innerHTML = score;
        }
        else{
            document.getElementById('score').innerHTML = score;
            document.getElementById('best').innerHTML = result;
        }},function (e) {NativeStorage.setItem(bestKey,score);
                        document.getElementById('score').innerHTML = score;
                        document.getElementById('best').innerHTML = score;
                        });    
        
        if(score>=37){
            document.getElementById('comment').innerHTM ='<i class="fa fa-star" style="font-size:48px;color:yellow"></i><i class="fa fa-star" style="font-size:48px;color:yellow"></i><i class="fa fa-star" style="font-size:48px;color:yellow"></i>';
        }
        else if(score>=30){ 
            document.getElementById('comment').innerHTML = '<i class="fa fa-star" style="font-size:48px;color:yellow"></i><i class="fa fa-star" style="font-size:48px;color:yellow"></i><i class="fa fa-star-half" style="font-size:48px;color:yellow"></i>';}
    
        else if(score>=20){ 
            document.getElementById('comment').innerHTML = '<i class="fa fa-star" style="font-size:48px;color:yellow"></i><i class="fa fa-star" style="font-size:48px;color:yellow"></i>';}
    
        else if(score>=10){
            document.getElementById('comment').innerHTML = '<i class="fa fa-star" style="font-size:48px;color:yellow"></i><i class="fa fa-star-half" style="font-size:48px;color:yellow">';
        }
        else if(score>=5){
            document.getElementById('comment').innerHTML = '<i class="fa fa-star" style="font-size:48px;color:yellow"></i>';
        }
        else if(score>1){
            document.getElementById('comment').innerHTML = '<i class="fa fa-star-half" style="font-size:48px;color:yellow"></i>';
        }
        else{
            document.getElementById('comment').innerHTML = '<i class="fa fa-frown" style="font-size:48px;color:#CD853F"></i>';
        }
        }
};

app.initialize();