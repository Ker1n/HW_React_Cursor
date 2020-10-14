import Rey from "../img/rey.jpg"
import sw from  "../img/skywalker.jpg"
import ls from "../img/postsImg/ls.jpg"
import LS_post from "../img/postsImg/LS_post.jpg"
import leia from "../img/postsImg/leia.jpg"
import leia_post from "../img/postsImg/leia_post.jpg"
import r from "../img/postsImg/r.jpg"
import r_post from "../img/postsImg/r_post.jpg"

export let postsData = [
    {
    userName: "Anakin Skywalker",
    userVatar: sw,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    contentImg : Rey,
    date: "26 feb.",
    messageCounter: 482,
    likeCounter: 146,
    retweetCounter: 887, 
  }, { 
    userName: "Luke Skywalker",
    userVatar: ls,
    nickname: "@defeated_sith",
    content: "I don't know! I taught her for 1 day. Leia...?",
    contentImg : LS_post,
    date: "1 mar.",
    messageCounter: 834,
    likeCounter: 1236,
    retweetCounter: 232,
  },
   { 
    userName: "Leia Skywalker",
    userVatar: leia,
    nickname: "@last_jedi",
    content: "I'm sure she's definitely Skywalker",
    contentImg : leia_post,
    date: "21 may.",
    messageCounter: 234,
    likeCounter: 547,
    retweetCounter: 129,
  },
   { 
    userName: "Rey Skywalker",
    userVatar: r,
    nickname: "@dart_vader",
    content: "This guy claims that I am not a Skywalker,  Luke...? WTF? ",
    contentImg :  r_post ,
    date: "26 февр.",
    messageCounter: 654,
    likeCounter: 357,
    retweetCounter: 832,
  },
  ]