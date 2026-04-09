# Iteration 2: Further Hero Swiper Fix

**Feedback:** Swiper still too low and hidden under next content.

**Analysis:** Hero section height reduced + items-start shifted up, but `py-20` + grid gap + shorter height may compress; swiper height still large relative to space.

**Updated Plan:**
1. Increase hero section heights back + margin adjustments
2. Reduce swiper heights further for mobile/sm
3. Reduce py-20 to py-16 sm:py-20
4. Add negative bottom margin to swiper container
5. Ensure z-index

**New Steps:**
- [ ] 1. Adjust HomeHeroSection: larger min-h, smaller py, negative mb on swiper div
- [ ] 2. Further reduce SwiperCube heights
- [ ] 3. Test

v2 fixes applied: Reduced swiper heights further, hero min-h-[95vh], py-12 sm:py-16, swiper wrapper -mb-12 sm:-mb-16 lg:-mb-20 z-30, label adjusted, z-indexes increased.

Test now and confirm if swiper position fixed (not hidden under next content).


