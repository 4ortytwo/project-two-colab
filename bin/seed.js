const mongoose      = require("mongoose");

mongoose.connect('mongodb://localhost/colab', {useNewUrlParser: true}, (err)=> {
    (err) ? console.log(err) 
    : console.log('connected to db')
});

const Project     = require('../models/project');

let projectSeed   = [
    {
        projectName: 'Landing page deployment', 
        description: 'Lorem ipsum pellentesque urna ornare ligula aenean velit mollis hac euismod, augue vitae suspendisse quis volutpat eu vivamus fusce blandit, egestas dapibus mi platea lectus nisi magna aptent iaculis pretium aliquam nec suspendisse proin scelerisque.', 
        pictureUrl: 'https://picsum.photos/500/500/?random',
        createdBy: mongoose.Types.ObjectId('5c7d3e9addaedd12b648ad3e'),
        createdAt: '2019.01.02'
    },
    {
        projectName: 'A mobile app development', 
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`, 
        pictureUrl: 'https://picsum.photos/500/500/?random',
        createdBy: mongoose.Types.ObjectId('5c7d3f399a180812b6dd0c33'),
        createdAt: '2018.02.28'
    },
    {
        projectName: 'Vector graphics adjustment', 
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`, 
        pictureUrl: 'https://picsum.photos/500/500/?random',
        createdBy: mongoose.Types.ObjectId('5c7d3f7a9a180812b6dd0c34'),
        createdAt: '2018.12.26'
    }
];

Project.remove({}, ()=> {
    for (let i = 0; i < projectSeed.length; i +=1) { 
        Project.create(projectSeed[i]).then(result => {
            console.log("saved")
        }).catch(err => {
            console.log(err)
        })
    }
}).catch(err => {
    console.log(err)
})