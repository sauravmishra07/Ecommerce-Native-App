import {
  View,
  Dimensions,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { BANNERS } from "@/assets/assets";

export default function Home() {
  const screenWidth = Dimensions.get("window").width;
  const bannerWidth = screenWidth - 32;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (e: any) => {
    const offset = e.nativeEvent.contentOffset.x;
    const index = Math.round(offset / (bannerWidth + 16));
    setActiveIndex(index);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <Header title="Forever" showCart showLogo showMenu />

      {/* Banner Slider */}
      <View className="px-4 pt-2 pb-3">
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={bannerWidth + 16}
          snapToAlignment="start"
          decelerationRate="fast"
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingVertical: 6 }}
        >
          {BANNERS.map((banner, index) => (
            <View
              key={banner.id}
              style={{
                width: bannerWidth,
                height: 210,
                marginRight: index === BANNERS.length - 1 ? 0 : 16,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              {/* Background Image */}
              <Image
                source={{ uri: banner.image }}
                style={{ width: bannerWidth, height: 210 }}
                resizeMode="cover"
              />

              {/* Gradient Overlay — using layered views */}
              <View
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.18)",
                }}
              />
              <View
              />

              {/* Content */}
              <View
                style={{
                  position: "absolute",
                  bottom: 18,
                  left: 18,
                  right: 18,
                }}
              >
                {/* Tag pill */}
                <View
                  style={{
                    alignSelf: "flex-start",
                    backgroundColor: "rgba(255,255,255,0.18)",
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.35)",
                    borderRadius: 100,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#ffff",
                      fontSize: 10,
                      fontWeight: "600",
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                    }}
                  >
                    New Arrival
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "700",
                    letterSpacing: 0.2,
                    marginBottom: 3,
                  }}
                  numberOfLines={1}
                >
                  {banner.title}
                </Text>

                <Text
                  style={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: 12,
                    fontWeight: "400",
                    marginBottom: 14,
                    letterSpacing: 0.1,
                  }}
                  numberOfLines={1}
                >
                  {banner.subtitle}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={{
                    alignSelf: "flex-start",
                    backgroundColor: "#fff",
                    paddingHorizontal: 18,
                    paddingVertical: 8,
                    borderRadius: 100,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#1a1a1a",
                      letterSpacing: 0.3,
                    }}
                  >
                    Shop Now
                  </Text>
                  <Text style={{ fontSize: 11, color: "#1a1a1a" }}>→</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Dot Indicators */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 12,
            gap: 6,
          }}
        >
          {BANNERS.map((_, i) => (
            <View
              key={i}
              style={{
                height: 6,
                width: activeIndex === i ? 20 : 6,
                borderRadius: 100,
                backgroundColor: activeIndex === i ? "#1a1a1a" : "#d1d5db",
              }}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}