import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { HeaderProps } from "@/constants/types";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants";

export default function Header({
  title,
  showBack,
  showSearch,
  showCart,
  showMenu,
  showLogo,
}: HeaderProps) {
  const router = useRouter();
  const { itemcount } = { itemcount: 6 };
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white">
      {/* left side */}
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showMenu && (
          <TouchableOpacity className="mr-3">
            <Ionicons name="menu-outline" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showLogo ? (
          <View className="flex-1">
            <Image
              source={require("@/assets/logo.png")}
              style={{
                width: "100%",
                height: 24,
              }}
              resizeMode="contain"
            />
          </View>
        ) : (
          title && (
            <Text className="text-xl font-bold text-primary text-center flex-1 mr-8">
              {title}
            </Text>
          )
        )}

        {!title && !showSearch && <View className="flex-1" />}
      </View>

      {/* Right side */}
      <View className="flex-row items-center gap-4">
        {showSearch && (
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}
        {showCart && (
          <TouchableOpacity onPress={() => router.push('/(tabs)/cart')} style={{ position: "relative", padding: 6 }}>
            <Ionicons name="bag-outline" size={24} color={COLORS.primary} />

            {itemcount > 0 && (
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  backgroundColor: "red",
                  minWidth: 16,
                  height: 16,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 4,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 10, fontWeight: "bold" }}
                >
                  {itemcount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
