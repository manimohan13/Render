import { LightningElement } from 'lwc';

export default class ParentCarouselPlayer extends LightningElement {
    players=[
        {
            
            name:"Rabin Krishna",
            about:"Rabin Krishnan is an all-rounder for the CSS Group cricket team in Malappuram",
            team:"CSS",
            imgSrc:"https://e8h4f7q7.rocketcdn.me/wp-content/uploads/2021/04/Harishankar-Reddy-768x768.jpeg"
            
        },
        {
            
            name:"Virat Kohli",
            about:"Virat Kohli is an Indian international cricketer who plays Test and ODI cricket for the Indian national team. ",
            team:"CSS",
            imgSrc:"https://www.nextprint.in/cdn/shop/files/2.png?v=1711117502"
            
        },
        { 
            
            name: "Rohit Sharma",
            about:"One of Aamchi Mumbai's favourite sons, Rohit Sharma sprung into focus during the inaugural World T20 in 2007, playing a massive role in India winning the trophy ",
            team: 'Mumbai Indians', 
            imgSrc:"https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png"
        },
        { 
        
            name: "Hardik Pandya", 
            about:"rdik Pandya, the true-blue Mumbai Indians icon, is back in the Blue and Gold. For seven years from 2015-2021, he formed the core of the MI winning juggernaut",
            team: "Mumbai Indians",
            imgSrc:"https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2023/11/7584-1700988868.jpg"
        }
    ];

        // Get CSS players
        get cssPlayers() {
            return this.players.filter(player => player.team === 'CSS');
        }
    
        // Get Mumbai Indians players
        get mumbaiIndiansPlayers() {
            return this.players.filter(player => player.team === 'Mumbai Indians');
        }
    
}