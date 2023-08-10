import { Char, CharMetadata, Pinyin } from "@giancosta86/hermes-react";
import { HashMap } from "@rimbu/hashed";

export const logograms = HashMap.of<Char, CharMetadata>(
  [
    "我",
    {
      annotation: "wǒ",
      classes: Pinyin.fallingRising
    }
  ],

  [
    "小",
    {
      annotation: "xiǎo",
      classes: Pinyin.fallingRising
    }
  ],

  [
    "的",
    {
      annotation: "de",
      classes: Pinyin.neuter
    }
  ],

  [
    "朋",
    {
      annotation: "péng",
      classes: Pinyin.rising
    }
  ],

  [
    "友",
    {
      annotation: "you",
      classes: Pinyin.neuter
    }
  ],

  [
    "您",
    {
      annotation: "nín",
      classes: Pinyin.rising
    }
  ],

  [
    "好",
    {
      annotation: "hǎo",
      classes: Pinyin.fallingRising
    }
  ],

  [
    "吗",
    {
      annotation: "ma",
      classes: Pinyin.neuter
    }
  ],

  [
    "请",
    {
      annotation: "qǐng",
      classes: Pinyin.fallingRising
    }
  ],

  [
    "来",
    {
      annotation: "lái",
      classes: Pinyin.rising
    }
  ],

  [
    "喝",
    {
      annotation: "hē",
      classes: Pinyin.flat
    }
  ],

  [
    "杯",
    {
      annotation: "bēi",
      classes: Pinyin.flat
    }
  ],

  [
    "茶",
    {
      annotation: "chá",
      classes: Pinyin.rising
    }
  ],

  [
    "吧",
    {
      annotation: "ba",
      classes: Pinyin.neuter
    }
  ]
);
