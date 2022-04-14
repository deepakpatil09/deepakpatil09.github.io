var names=new Array();
names[0]="Deepak";
names[1]="Jhon";
names[2]="chetan";
names[3]="pradeep";
names[4]="jeans";
names[5]="zeebra";
names[6]="kapil";
names[7]="mango";
names[8]="jingu";

for(var i=0; i<names.length;i++){
if(names[i].charAt(0)==='j'|| names[i].charAt(0)==='J'){
    console.log("Goodbye "+names[i])
    }
    else{
    console.log("hello " + names[i]);
    }

}