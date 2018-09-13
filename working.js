var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        
        document.getElementById("btn_counter").onclick = function(){
            if(app.loadData("countKey")==null){
                document.getElementById("count").innerHTML="0";
                app.saveData("countKey", 0);
                console.log(app.loadData("countKey"));
            }   
            else{
                var mycount= app.loadData("countKey");
                mycount+=1;
                console.log("mycount: "+mycount);
                app.saveData("countKey", mycount);
                document.getElementById("count").innerHTML=mycount;
        }
    }},
    saveData: function (mykey, myvalue) {
        console.log("in save");
        NativeStorage.setItem(mykey,myvalue);
    },
    loadData: function (mykey) {
        console.log("in load");
        var x=0
        NativeStorage.getItem(mykey, function (result) {x= Number(result);},function (e) {});
        console.log("X: "+ x);
        return x;
    },
    
    loadPage: function(page){
        var capitals1=" <div class='vertical-top'><div class ='container'><table class='table' ><thead><tr><th> <a href ='play.html'><i class='fa fa-arrow-left' style='font-size:36px'></i></a></th><th style='text-align: right'><h3 id ='score'>0</h3></th><th style='text-align: right' id = 'lives'><i class='fa fa-heart'  style='font-size:36px; color:blue'></i>x3</th></tr></thead></table></div></div><div class='vertical-center-quiz'><div class ='container'><center><div class ='row' style='justify-content:center'><div class='col-lg-6' ><h1 style='font-family: gameFont' id ='que'>Kano</h1 </div></div></center><br><br><div class='row' ><div class='col-lg-6' style='border-bottom: 5px solid #fff;'><button type='button' onclick = 'checkAnsCapital(this.id)' id ='opt1' class='btn btn-primary btn-block' ><h4 id ='opt1_'></h4></button></div><div class='col-lg-6' style='border-bottom: 5px solid #fff;'><button type='button' onclick = 'checkAnsCapital(this.id)' id ='opt2', class='btn btn-primary btn-block'><h4 id ='opt2_'></h4></button></div> <br><div class='col-lg-6' style='border-bottom: 5px solid #fff;'><button type='button' onclick = 'checkAnsCapital(this.id)' id ='opt3' class='btn btn-primary btn-block'><h4 id ='opt3_'></h4></button></div><div class='col-lg-6' style='border-bottom: 5px solid #fff;'><button type='button' onclick = 'checkAnsCapital(this.id)' id ='opt4' class='btn btn-primary btn-block'><h4 id ='opt4_'></h4></button></div></div></div></div>"
        console.log('clicked');
        if (page =="capitals1"){
            page =capitals1;
        }
        document.getElementById('content').innerHTML=page;
    }
};

app.initialize();