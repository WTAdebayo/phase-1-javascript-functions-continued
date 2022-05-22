// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun("bathe my dog");

const mondayWork = function(location = 'go to the office') {
    return (`This Monday, I will ${location}.`);
}
mondayWork('go to work');

function wrapAdjective(para1="*") {
    return function(para2="special") {
        return `You are ${para1}${para2}${para1}!`;
    };
}