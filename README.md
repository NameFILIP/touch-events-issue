# Touch Events Issue

## Access

1. Go to https://namefilip.github.io/touch-events-issue/ on mobile phone
2. Click in the middle of the block
3. Click on the border of the block
4. See inconsistent events (pointerup/pointerdown, touchstart/touchend)

## How to publish

```
yarn build
rm -rf docs
mv build docs
git add --all
git commit --message "Publish"
git push
```
