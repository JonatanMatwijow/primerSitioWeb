//<![CDATA[
    function makeArray() {
        for (i = 0; i<makeArray.arguments.length; i++)
        this[i + 1] = makeArray.arguments[i];}
        var months = new makeArray('Enero','Febrero','Marzo','Abril','Mayo',
        'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var yy = date.getYear();
        var year = (yy < 1000) ? yy + 1900 : yy;
        document.write(day + " de " + months[month] + " del " + year + " | " + " Argentina.");
  //]]>
    function startTime(){
        today=new Date();
        h=today.getHours();
        m=today.getMinutes();
        s=today.getSeconds();
        m=checkTime(m);
        s=checkTime(s);
        document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
        t=setTimeout('startTime()',500);}
    
    function checkTime(i)
        {if (i<10) {i="0" + i;}return i;}
        window.onload=function(){startTime();}


