class Video {
    constructor(title,uploader,time) {
        this.title=title
        this.time=time
        this.uploader=uploader

        
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} secondsof ${this.title}`);

        
    }
}
const videoData = [
    ['JavaScript Tutorial', 'nouha', 3600],
    ['Node.js Masterclass', 'lolo', 5400],
    ['React for Beginners', 'Charlie', 2700],
    ['Vue.js Guide', 'Diana', 1800],
    ['Advanced CSS', 'Eve', 4200]
  ];
let videoOne=new Video('tuto of website with JS','Nouha',12000)
videoOne.watch()
let videos = [];
for (let data of videoData) {
  let video = new Video(data[0], data[1], data[2]);
  videos.push(video);
}

videos.forEach(video => video.watch());
