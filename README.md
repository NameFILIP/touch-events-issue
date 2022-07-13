# Touch Events Issue

## Instructions

1. Go to https://namefilip.github.io/touch-events-issue/ on mobile phone
2. Click in the middle of the block
3. Click on the border of the block
4. See inconsistent events (pointerup/pointerdown, touchstart/touchend)

## Screenshots

<img src="https://user-images.githubusercontent.com/834796/178831563-a33e3ed7-304a-42fa-b6f1-0bab67544202.PNG" alt="IMG_4140" width="200"> <img src="https://user-images.githubusercontent.com/834796/178831581-7519dc78-565d-4baf-b1a3-abdae4b8f708.PNG" alt="IMG_4140" width="200"> <img src="https://user-images.githubusercontent.com/834796/178831594-358bdfb8-f349-4e8d-8842-8a7f0dd25def.PNG" alt="IMG_4140" width="200"> <img src="https://user-images.githubusercontent.com/834796/178831610-9b418100-8d62-4c18-a1c2-963b01dc8682.PNG" alt="IMG_4140" width="200">

## Implementation

The logic is implemented in the [App.js](https://github.com/NameFILIP/touch-events-issue/blob/main/src/App.js) file.

## How to publish

```
yarn build
rm -rf docs
mv build docs
git add --all
git commit --message "Publish"
git push
```
