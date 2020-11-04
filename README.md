# Webcam Annotations with OBS

Inspired by [CodingTrain](https://www.youtube.com/watch?v=9z9mbiOZqSs), who was inspired by [Cameron Hunter](https://twitter.com/shiffman/status/1309234059495833600?s=20).

Stickers (Model to train):
- [x] Noooooo!!!!             👎 (thumbs down)
- [x] Yes                     👍 (thumbs up)
- [x] Question                ✋ (raise hand)
- [x] Bye                     🙌 (both hands up)
- [x] Awesome!                🤘 (rock)
- [x] I could not hear that   hand to ear
- [x] I'll be right back      out of screen

# Getting Virtual Webcam to Run on Linux
### Resources
- [YASHA instructions](https://yasha.solutions/virtual-webcam-on-linux/)
- [new MOK key add](https://documentation.commvault.com/commvault/v11/article?p=118661.htm)
- [official v4l2loopback](https://github.com/umlaeute/v4l2loopback)


```bash
# check all webcam devices
ls -l /dev/video*

# send virtual webcam
# exclusive caps to detect on chrome and chromium
sudo modprobe v4l2loopback video_nr=5 card_label="VirtualCam" exclusive_caps=1

# remove virtual video
sudo modprobe -r v4l2loopback
```

# Teachable Machine Model
- hosted on google via CDN here: https://teachablemachine.withgoogle.com/models/716JsmZJe/
- inside this repo under the `teachable-machine-model` folder

# ToDo's

- [ ] eventually build an ELECTRON app that can be used as virtual webcam. Loading your own ML model trained with teachable machine. Build Stickers library that connects you then can map on your trained states. Import ML model by link. Hosted on Google Server.
