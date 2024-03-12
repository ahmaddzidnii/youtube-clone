"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

export const DescriptionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  function detectLinks(text: string) {
    // Regular expression to match URLs and hashtags
    const urlRegex = /(https?:\/\/[^\s]+)|(#\w+)/g;

    // Menggunakan ekspresi reguler untuk mencocokkan URL dan hashtag dalam teks
    const matches = text.match(urlRegex);

    // Jika ada URL atau hashtag yang cocok, mengembalikan array komponen link
    if (matches) {
      return matches.map((match, index) => {
        if (match.startsWith("#")) {
          // Jika match adalah hashtag, render sebagai link
          return (
            <Fragment key={index}>
              {" "}
              <Link
                href={`/hashtag/${match.substring(1)}`}
                className="text-blue-500"
              >
                {match}
              </Link>
            </Fragment>
          );
        } else {
          // Jika match adalah URL, render sebagai link
          return (
            <Fragment key={index}>
              {text.slice(0, text.indexOf(match))}{" "}
              <Link href={match} target="_blank" className="text-blue-500">
                {match}
              </Link>
            </Fragment>
          );
        }
      });
    } else {
      // Jika tidak ada URL atau hashtag yang cocok, mengembalikan teks aslinya
      return text;
    }
  }

  const desCriptionText = `Arsy Widianto & Tiara Andini’s official music video for single ‘Masih Hatiku’ (from Music Series: ArTi Semestinya Cinta)
    Download and Stream: https://lnk.to/ArTiMasihHatikuVD 
    #ArTiMasihHatiku #ArsyWidianto #TiaraAndini

    Music Series: ArTi Semestinya Cinta
    Episode 1: Lagu Pernikahan Kita   

    Audio:
    Composer: Yovie Widianto
    Lyrics: Arsy Widianto
    Producer: Yovie Widianto & Adrian Kitut
    EP/Keys & Program: Adrian Kitut 
    Strings Arranger: Ari Renaldi
    Guitar: Devinza Kendranata
    Vocal Director: Bowo Soulmate & Dennis Nussy
    Orchestra: Budapest Scoring Orchestra
    Digital Editor: Heri Alesis 
    Rec Engineer: Yusup Albantani & Rioexondul
    Recorded at GS 03 UK Studio 
    Mixed & Mastered by Ari Renaldi at ARU Studio
    Music video :
    Music Video Production by Nocturnal Projects
    Concept by Yovie Widianto
    Directed by Jessy Sylviani & Bobby Adrian V
    Producer: Jessy Sylviani
    Cinematographer: Bobby Adrian V
    Production Assistant: Jonas Awi
    Editor: Bobby Adrian V
    Sound Designer: Alvin Wardiman
    MUA: Vina Vania
    Stylist:  FaberyFab
    Supporting Talent: Kyla Kameron
        
    Lyrics:
    aku tepat ada di sampingmu
    bertahan menunggu satunya cintaku
    mengapa dulu kau ragukan aku
    sesali diriku melangkah dengannya

    sungguhkah aku untukmu
    kenyataan masih untuknya
    ku cemburu namun hanya sebatas itu

    kemana hati kau bawa
    tanpa pernah jelas akhirnya
    ku menunggu kenyataannya kau di sana
    adakah hatimu masih hatiku

    bila kau lihat daun berguguran
    laksana patahnya ranting hatiku
    ingin aku kembali denganmu
    rasanya kulihat kau juga tak mungkin

    sungguhkah aku untukmu
    kenyataan masih untuknya
    ku cemburu namun hanya sebatas itu

    kemana hati kau bawa
    tanpa pernah jelas akhirnya
    ku menunggu kenyataannya kau di sana
    adakah hatimu masih hatiku

    inginkan dirimu
    merindu dirimu
    berharap semesta satukan kita

    bila tak mungkin
    dan terikat dirinya
    haruskah aku mengalah
    haruskah aku menjauh

    ku cemburu namun hanya sebatas itu
    kemana hati kau bawa
    tanpa pernah jelas akhirnya
    ku menunggu kenyataannya kau di sana
    adakah hatimu masih hatiku

    kenyataan masih untuknya
    ku cemburu namun hanya sebatas itu
    kemana hati kau bawa
    tanpa pernah jelas akhirnya

    ku menunggu kenyataannya kau di sana
    adakah hatimu masih hatiku
    sungguhkah hatimu masih milikku
    masih milikku

    hmmm…

    Official Music Video by Arsy Widianto & Tiara Andini performing Masih Hatiku (from Music Series: ArTi Semestinya Cinta) © 2024 Universal Music Indonesia.
    
    http://vevo.ly/WhFrd8`;

  const formatedDescription = desCriptionText.split("\n").map((line, index) => (
    <Fragment key={index}>
      {detectLinks(line)}
      <br />
    </Fragment>
  ));
  const truncatedDescription = formatedDescription.slice(0, 3);
  return (
    <div className="mt-3 w-full rounded-md bg-secondary p-3">
      <div className="flex flex-wrap gap-x-2 text-[14px]">
        <span className="font-semibold">3.739.610 x ditonton</span>
        <span className="font-medium">
          Telah tayang perdana pada 23 Feb 2024
        </span>
        <Link className="font-semibold text-blue-600" href="/feed/trending">
          #21 di Trending untuk musik
        </Link>
      </div>
      <div className="text-[12px] lg:text-[14px]">
        {isExpanded ? formatedDescription : truncatedDescription}
        {isExpanded ? (
          <span
            className="cursor-pointer font-semibold"
            onClick={() => setIsExpanded(false)}
          >
            Lebih sedikit
          </span>
        ) : (
          <span
            className="cursor-pointer font-semibold"
            onClick={() => setIsExpanded(true)}
          >
            ...lainnya
          </span>
        )}
      </div>
    </div>
  );
};
