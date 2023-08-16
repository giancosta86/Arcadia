import { HashMap } from "@rimbu/hashed";
import { Char, CharMetadata, Pinyin } from "@giancosta86/hermes-react";

export const pinyinAnnotations = HashMap.of<Char, CharMetadata>(
  [
    "我",
    {
      annotation: "wǒ",
      className: Pinyin.fallingRising
    }
  ],

  [
    "小",
    {
      annotation: "xiǎo",
      className: Pinyin.fallingRising
    }
  ],

  [
    "的",
    {
      annotation: "de",
      className: Pinyin.neuter
    }
  ],

  [
    "朋",
    {
      annotation: "péng",
      className: Pinyin.rising
    }
  ],

  [
    "友",
    {
      annotation: "you",
      className: Pinyin.neuter
    }
  ],

  [
    "您",
    {
      annotation: "nín",
      className: Pinyin.rising
    }
  ],

  [
    "好",
    {
      annotation: "hǎo",
      className: Pinyin.fallingRising
    }
  ],

  [
    "吗",
    {
      annotation: "ma",
      className: Pinyin.neuter
    }
  ],

  [
    "请",
    {
      annotation: "qǐng",
      className: Pinyin.fallingRising
    }
  ],

  [
    "来",
    {
      annotation: "lái",
      className: Pinyin.rising
    }
  ],

  [
    "喝",
    {
      annotation: "hē",
      className: Pinyin.flat
    }
  ],

  [
    "杯",
    {
      annotation: "bēi",
      className: Pinyin.flat
    }
  ],

  [
    "茶",
    {
      annotation: "chá",
      className: Pinyin.rising
    }
  ],

  [
    "吧",
    {
      annotation: "ba",
      className: Pinyin.neuter
    }
  ]
);
