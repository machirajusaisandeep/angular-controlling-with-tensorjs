import * as fingerpose from 'fingerpose';

const oneFingerGesture = new fingerpose.GestureDescription('one_finger');
oneFingerGesture.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
oneFingerGesture.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
oneFingerGesture.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
oneFingerGesture.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
oneFingerGesture.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.FullCurl,
  1.0
);

/// swag
const swagPosition = new fingerpose.GestureDescription('swag');

swagPosition.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.Finger.NoCurl,
  1.0
)

swagPosition.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

swagPosition.addCurl(
  fingerpose.Finger.Index,
  fingerpose.Finger.NoCurl,
  1.0
)

swagPosition.addDirection(fingerpose.Finger.Index, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);
swagPosition.addDirection(fingerpose.Finger.Index, fingerpose.FingerDirection.VerticalUp, 0.25);



swagPosition.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.Finger.FullCurl,
  1.0
)


swagPosition.addDirection(fingerpose.Finger.Middle, fingerpose.FingerDirection.DiagonalUpRight, 1.0);

swagPosition.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.Finger.FullCurl,
  1.0
)

swagPosition.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.DiagonalUpRight, 1.0);

swagPosition.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.Finger.NoCurl,
  1.0
)

swagPosition.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.DiagonalUpRight, 1.0);
swagPosition.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.VerticalUp, 0.25);




// ok 
const okPosition = new fingerpose.GestureDescription('ok');


okPosition.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.Finger.HalfCurl,
  1.0
)

okPosition.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);
okPosition.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.HorizontalLeft, 0.5);

okPosition.addCurl(
  fingerpose.Finger.Index,
  fingerpose.Finger.HalfCurl,
  1.0
)
okPosition.addDirection(fingerpose.Finger.Index, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);
okPosition.addDirection(fingerpose.Finger.Index, fingerpose.FingerDirection.HorizontalLeft, 0.20);

okPosition.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.Finger.NoCurl,
  1.0
)
okPosition.addDirection(fingerpose.Finger.Middle, fingerpose.FingerDirection.VerticalUp, 1.0);


okPosition.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.Finger.NoCurl,
  1.0
)

okPosition.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.VerticalUp, 1.0);


okPosition.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.Finger.NoCurl,
  1.0
)

okPosition.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.VerticalUp, 1.0);




// threeFinger

const threeFingDes = new fingerpose.GestureDescription('threeFinger');


// thumb:
threeFingDes.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.HalfCurl, 0.5);
threeFingDes.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 0.5);
threeFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.VerticalUp, 1.0);
threeFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// index:
threeFingDes.addCurl( fingerpose.Finger.Index,  fingerpose.FingerCurl.NoCurl, 1.0);
threeFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.VerticalUp, 0.75);
threeFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// middle:
threeFingDes.addCurl( fingerpose.Finger.Middle,  fingerpose.FingerCurl.NoCurl, 1.0);
threeFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.VerticalUp, 1.0);
threeFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.DiagonalUpLeft, 0.75);

// ring:
threeFingDes.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.NoCurl, 1.0);
threeFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.VerticalUp,  0.75);
threeFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// pinky:
threeFingDes.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.FullCurl, 1.0);
threeFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.VerticalUp, 0.2);
threeFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);
threeFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
threeFingDes.setWeight(fingerpose.Finger.Index, 2);
threeFingDes.setWeight(fingerpose.Finger.Middle, 2);
threeFingDes.setWeight(fingerpose.Finger.Ring, 2);

// fourFingDes

const fourFingDes = new fingerpose.GestureDescription('fourFinger');


// thumb:
fourFingDes.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.HalfCurl, 0.5);
fourFingDes.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 0.5);
fourFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.VerticalUp, 1.0);
fourFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// index:
fourFingDes.addCurl( fingerpose.Finger.Index,  fingerpose.FingerCurl.NoCurl, 1.0);
fourFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.VerticalUp, 0.75);
fourFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// middle:
fourFingDes.addCurl( fingerpose.Finger.Middle,  fingerpose.FingerCurl.NoCurl, 1.0);
fourFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.VerticalUp, 1.0);
fourFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.DiagonalUpLeft, 0.75);

// ring:
fourFingDes.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.NoCurl, 1.0);
fourFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.VerticalUp,  0.75);
fourFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// pinky:
fourFingDes.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.NoCurl, 1.0);
fourFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.VerticalUp, 0.2);
fourFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// give additional weight to index and ring fingers
fourFingDes.setWeight(fingerpose.Finger.Index, 2);
fourFingDes.setWeight(fingerpose.Finger.Middle, 2);
fourFingDes.setWeight(fingerpose.Finger.Ring, 2);
fourFingDes.setWeight(fingerpose.Finger.Pinky, 2);

const fiveFingDes = new fingerpose.GestureDescription('fiveFinger');


// thumb:
fiveFingDes.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 1.0);
fiveFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.VerticalUp, 1.0);
fiveFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// index:
fiveFingDes.addCurl( fingerpose.Finger.Index,  fingerpose.FingerCurl.NoCurl, 1.0);
fiveFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.VerticalUp, 0.75);
fiveFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// middle:
fiveFingDes.addCurl( fingerpose.Finger.Middle,  fingerpose.FingerCurl.NoCurl, 1.0);
fiveFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.VerticalUp, 1.0);
fiveFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.DiagonalUpLeft, 0.75);

// ring:
fiveFingDes.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.NoCurl, 1.0);
fiveFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.VerticalUp,  0.75);
fiveFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// pinky:
fiveFingDes.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.NoCurl, 1.0);
fiveFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.VerticalUp, 0.2);
fiveFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// give additional weight to index and ring fingers
fiveFingDes.setWeight(fingerpose.Finger.Thumb, 2);
fiveFingDes.setWeight(fingerpose.Finger.Index, 2);
fiveFingDes.setWeight(fingerpose.Finger.Middle, 2);
fiveFingDes.setWeight(fingerpose.Finger.Ring, 2);
fiveFingDes.setWeight(fingerpose.Finger.Pinky, 2);


const thumbsDownDescription = new fingerpose.GestureDescription('thumbs_down');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
thumbsDownDescription.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 1.0);
thumbsDownDescription.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.VerticalDown, 1.0);
thumbsDownDescription.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalDownLeft, 0.5);
thumbsDownDescription.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalDownRight, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [fingerpose.Finger.Index, fingerpose.Finger.Middle, fingerpose.Finger.Ring, fingerpose.Finger.Pinky]) {
  thumbsDownDescription.addCurl(finger, fingerpose.FingerCurl.FullCurl, 1.0);
  thumbsDownDescription.addDirection(finger, fingerpose.FingerDirection.HorizontalLeft, 1.0);
  thumbsDownDescription.addDirection(finger, fingerpose.FingerDirection.HorizontalRight, 1.0);
}


export const GE = new fingerpose.GestureEstimator([
  fingerpose.Gestures.VictoryGesture,
  fingerpose.Gestures.ThumbsUpGesture,
  oneFingerGesture,
  threeFingDes,
  fourFingDes,
  fiveFingDes,
  thumbsDownDescription
]);


