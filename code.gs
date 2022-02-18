function updateTitle(){
  var myVideoId = "lCbKjqtDPUo";
  var otherVideoId = "aWzlQ2N6qqg";
  var part = 'snippet,statistics';
  var videoTitle = ` These sheep have been viewed ` + returnViewCount(part, otherVideoId) + ` times!... Well actually only ` + returnViewCount(part, myVideoId) + ` times.`;
  console.log(videoTitle);

  try {
    var myVideo = YouTube.Videos.list(part, {'id': myVideoId}).items[0];
    // console.log(myVideo);
    myVideo.snippet.title = videoTitle;
    YouTube.Videos.update(myVideo, part);
  } catch(e) {
    console.error(e);
  }
}

function returnViewCount(part, videoId){
  var params = {'id': videoId};
  var response = YouTube.Videos.list(part, params);
  var otherVideo = response.items[0];
  var videoViewsCount = otherVideo.statistics.viewCount;
  return videoViewsCount;
}
