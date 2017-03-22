#import "React/RCTBridgeModule.h"
#import "React/RCTViewManager.h"
#import "../NMRangeSlider/NMRangeSlider.h"

@interface NMRangeSliderManager : RCTViewManager

- (void)sendValues:(NSString *)eventName touch:(UITouch *)touch;

@end
