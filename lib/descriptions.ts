export const descriptions = [
  "踏入 NekoPixel，一个由玩家驱动、持续演化的 Minecraft 世界。在这里，每一次探索都意味着新的可能。",
  "不只是生存，而是在一个有生命的像素世界中留下你的足迹。欢迎来到 NekoPixel。",
  "在猫与像素交织的世界里，你的故事才刚刚开始。",
  "加入 NekoPixel，从零开始建造属于你的小宇宙。没有脚本，只有无限的冒险。",
  "开启极致生存之旅，在动态演化的世界中与时间、资源与命运博弈。",
  "生存不只是活下去，而是在混乱中创造秩序——NekoPixel，等你来改写规则。",
  "一个你必须靠智慧与协作才能征服的世界，就藏在这片像素之中。",
  "建造的不止是方块，而是连接彼此的信任与冒险。欢迎加入 NekoPixel 社区。",
  "在这里，每一个建筑都讲述一个故事，每一个玩家都是世界的一部分。",
  "让创意成城，让社区成型。你的方块，你的世界。",
]

export function getRandomDescription() {
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}
