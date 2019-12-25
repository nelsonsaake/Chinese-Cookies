function display(cookie) {
    document.getElementById("out").innerHTML = cookie;
}

function exec() {
    nextcookie();
    resetAnimation();
    
    base = 10;
    second = 1000;
    minute = 60 * second;
    timeout = 1 * minute;

    setTimeout(
        function () {
            exec();
        },
        timeout
    );
}

var cookies = [
    "When in doubt, think!",
    "Think different!",
    "Just do it!",
    "Perception is reality!",
    "If you want something to change: first, you have to change!",
    "If you are not failing, you are not even trying!",
    "Day-to-day failure is an integral part of long term success",
    "If you help a lot of people fet what they want, you would get everything, everything, that you you want!",
    "\"Don't waste time on things you can't change!\" - Dan Pena",
    "\"Tough times don't last - tough people do!\" - Dan Pena",
    "\"The best way to predict the future is to create it yourself!\" - Dan Pena",
    "\"Man Plans - God Laughs!\" - Dan Pena",
    "\"Don't under any circumstances, ever, second guess yourself.\" - Dan Pena",
    "\"Any problem solved will be replaced immediately by a larger more complicated one!\" - Dan Pena",
    "\"Don't focus on mistakes, focus on the positive 'next time'!\" - Dan Pena",
    "\"Progress often masquerades as trouble.\" - Dan Pena",
    "\"The more you investigate, the less you have to invest.\" - Dan Pena",
    "\"I've never seen a 'part-time' super successful, high performance person.\" - Dan Pena",
    "\"A deal has to sound good before it is good.\" - Dan Pena",
    "\"If you want things to change, first you have to change.\" - Dan Pena",
    "\"The only difference between a Champ and a Chump is 'U'.\" - Dan Pena",
    "\"The older you get the less you are surprised.\" - Dan Pena",
    "\"People that read fucking books don't take action!\" - Dan Pena",
    "\"Don't be a cunt\" - Dan Pena",
    "Positive Mental Attitude.  It has been my observation that most people have a distorted concept of what constitutes a true positive mental attitude.  \"Just fake it till you make it\" are perhaps the most damaging motivational words ever spoken, yet I've heard this phrase repeated by positive mental attitude enthusiasts many times over the years.",
    "The Theory of Next, states:  The key to maintaining a positive mental attitude is to recognize that no one deal is that important.  The person with a true positive mental attitude possesses the power to say \"Next!\" and quickly move on to the next deal when things don't work out.",
    "My answer to the \"working long, hard hours\" adage became known as the Uncle George Theory, which states:  If your main focus is on keeping your nose to the grindstone and working long, hard hours, you're guaranteed to get only one thing in return:  old!",
    "The bedrock theory I am referring to is the Theory of Reality, which states:  Reality is neither the way you wish things to be nor the way they appear to be, but the way they actually are.  Either you acknowledge reality and use it to your benefit, or it will automatically work against you.",
    "Cornerstone No. 1 is the Theory of Relativity, which states:  In order to settle on a rational course of action (or inaction), one must first weigh all pertinent facts in a relative light and carefully define his terms.",
    "Cornerstone No. 2 is the Theory of Relevance, which states:  No matter how interesting or how true something may be, the primary factor to take into consideration is how relevant it is to your achieving main your objective.",
    "Cornerstone No. 3 is the Mortality Theory, which states:  Given that your time on earth is limited, it makes good sense to aim high and move fast.",
    "Cornerstone No. 4 is the Ice-Ball Theory, which states:  Given the apparent, ultimate fate of the earth, it is vain and nonsensical to take oneself too seriously.",
    "The outcome of most situations in life are determined over the long term.  The guy who gets off to a fast start merely wins a battle; the individual who's ahead at the end of the race wins the war. Battles are for ego-​trippers, wars are for money-grippers.",
    "If you slow down enough to look over your right shoulder, I'll pass you on the left; if you slow down enough to look over your left shoulder, I'll pass you on the right; and if you try to stop me from passing you on either side, I'll maneuver between your legs, if that's what it takes.  That heavy breathing you hear behind you is me—steadily closing in on you.",
    "Don't allow yourself to be intimidated by know-it-alls who thrive on bestowing their knowledge on insecure people.  Mentally close your ears and put blinders on your eyes, and move relentlessly forward with the knowledge that what someone else knows is not relevant.  In the final analysis, what is most relevant to your success is what you know and what you do."
];

function nextcookie() {
    index = 0;
    index = Math.random() * cookies.length;
    index = Math.floor(index);
    cookie = cookies[index];
    display(cookie);
}

function resetAnimation() {
    document.getElementById("out").style =
        " \
            animation-name: fade;\
            animation-duration: 60s;\
            animation-iteration-count: infinite;\
        "
    ;
}