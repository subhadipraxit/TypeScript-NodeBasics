enum DaysOfWeek{

    SUN = 100, MON, TUE, WED, THU, FRI, SAT   // we can assign one value , others will auto increament , default starts from 0
    
}
var day : DaysOfWeek =DaysOfWeek.MON;

if(day == DaysOfWeek.MON)
{
    console.log("It is MONDAY");
}