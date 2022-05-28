function student (n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`Ft-web${b}`;
 }
 function storedata(e){
   e.preventDefault();
 var form=document.getElementById("studentsData")
 var name=form.name.value
 var course=form.course.value
 var unit=form.unit.value
 var image=form.image.value
 var batch=form.batch.value
 
 var s1= new student(name,course,unit,image,batch)
 var data=JSON.parse(localStorage.getItem("students"))||[];
 data.push(s1)
 
 localStorage.setItem("students",JSON.stringify(data));
 // window.location.href="dashboard.html"
 form.name.value="";
 form.course.value="";
 form.unit.value="";
 form.image.value="";
 form.batch.value="";
 //  document.createElement("h2").innerText="";
 window.location.reload();
 
 }
 var batches=document.createElement("h2")
 function Calculate()
 {
     var data=JSON.parse(localStorage.getItem("students"))||[]
     let obj={};
     for(var i=0;i<data.length;i++)
     {
        if(!obj[data[i].batch])
        {
            obj[data[i].batch]=0;
        }
     }
 
     for(var i=0;i<data.length;i++)
     {
        obj[data[i].batch]++
     }
     //console.log(obj)
     for(var key in obj)
     {
        batches.innerText+=`${key}-${obj[key]} |`
     }
       document.getElementById("navbar").append(batches);
    
 }
 Calculate()