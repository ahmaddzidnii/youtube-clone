import Image from "next/image";
import React from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { ButtonInteractive } from "@/components/watch/button-interactive";
import {
  RecommendationVideoXLToUp,
  RecommendationVideoXltoBottom,
} from "@/components/watch/recommendation-video";
import { VideoPlayer } from "@/components/watch/video-player";
import { CommentComponent } from "@/components/watch/comment";
import { DescriptionComponent } from "@/components/watch/description/description-component";
import { ResponseType } from "./response";

export const metadata = {
  title: "Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)",
};

export default async function WatchPage({
  searchParams,
}: {
  searchParams: { v: string };
}) {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  // const { data } = await axios.get<ResponseType>(
  //   `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${searchParams.v}&part=id,snippet,statistics,status`,
  // );
  const data = {
    kind: "youtube#videoListResponse",
    etag: "9hdXfVtrV7V5nCzW2hlSv39GuUg",
    items: [
      {
        kind: "youtube#video",
        etag: "egevHxQw26la79_6d_E27nI-LrQ",
        id: "QhubX_VQogk",
        snippet: {
          publishedAt: "2024-02-22T17:00:11Z",
          channelId: "UC3G5YxFUwpODOVx1kCS-grA",
          title:
            "Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)",
          description:
            "Arsy Widianto & Tiara Andini’s official music video for single ‘Masih Hatiku’ (from Music Series: ArTi Semestinya Cinta)\nDownload and Stream: https://lnk.to/ArTiMasihHatikuVD \n#ArTiMasihHatiku #ArsyWidianto #TiaraAndini\n\nMusic Series: ArTi Semestinya Cinta\nEpisode 1: Lagu Pernikahan Kita https://youtu.be/ZeFpigRaXbI \n\nAudio:\nComposer: Yovie Widianto\nLyrics: Arsy Widianto\nProducer: Yovie Widianto & Adrian Kitut\nEP/Keys & Program: Adrian Kitut \nStrings Arranger: Ari Renaldi\nGuitar: Devinza Kendranata\nVocal Director: Bowo Soulmate & Dennis Nussy\nOrchestra: Budapest Scoring Orchestra\nDigital Editor: Heri Alesis \nRec Engineer: Yusup Albantani & Rioexondul\nRecorded at GS 03 UK Studio \nMixed & Mastered by Ari Renaldi at ARU Studio\n\nMusic Video:\nMusic Video Production by Nocturnal Projects\nConcept by Yovie Widianto\nDirected by Jessy Sylviani & Bobby Adrian V\nProducer: Jessy Sylviani\nCinematographer: Bobby Adrian V\nProduction Assistant: Jonas Awi\nEditor: Bobby Adrian V\nSound Designer: Alvin Wardiman\nMUA: Vina Vania\nStylist:  FaberyFab\nSupporting Talent: Kyla Kameron\n\nFollow Arsy Widianto:\nInstagram: https://www.instagram.com/arsywidianto/   \nTikTok: https://www.tiktok.com/@arsywidianto26 \nYouTube: https://www.youtube.com/@arsywidianto7627    \nTwitter: https://twitter.com/arsywidianto   \nFacebook: https://www.facebook.com/arsywidiantoo/  \n\nFollow Tiara Andini: \nInstagram: https://www.instagram.com/tiaraandini/   \nYouTube: https://www.youtube.com/@tiaraandiniofficial\nTikTok: https://www.tiktok.com/@initiaraandini\nTwitter: https://twitter.com/initiaraandini   \nFacebook: https://www.facebook.com/TiaraIdol10/      \n\nLyrics:\naku tepat ada di sampingmu\nbertahan menunggu satunya cintaku\nmengapa dulu kau ragukan aku\nsesali diriku melangkah dengannya\n\nsungguhkah aku untukmu\nkenyataan masih untuknya\nku cemburu namun hanya sebatas itu\n\nkemana hati kau bawa\ntanpa pernah jelas akhirnya\nku menunggu kenyataannya kau di sana\nadakah hatimu masih hatiku\n\nbila kau lihat daun berguguran\nlaksana patahnya ranting hatiku\ningin aku kembali denganmu\nrasanya kulihat kau juga tak mungkin\n\nsungguhkah aku untukmu\nkenyataan masih untuknya\nku cemburu namun hanya sebatas itu\n\nkemana hati kau bawa\ntanpa pernah jelas akhirnya\nku menunggu kenyataannya kau di sana\nadakah hatimu masih hatiku\n\ninginkan dirimu\nmerindu dirimu\nberharap semesta satukan kita\n\nbila tak mungkin\ndan terikat dirinya\nharuskah aku mengalah\nharuskah aku menjauh\n\nku cemburu namun hanya sebatas itu\nkemana hati kau bawa\ntanpa pernah jelas akhirnya\nku menunggu kenyataannya kau di sana\nadakah hatimu masih hatiku\n\nkenyataan masih untuknya\nku cemburu namun hanya sebatas itu\nkemana hati kau bawa\ntanpa pernah jelas akhirnya\n\nku menunggu kenyataannya kau di sana\nadakah hatimu masih hatiku\nsungguhkah hatimu masih milikku\nmasih milikku\n\nhmmm…\n\nOfficial Music Video by Arsy Widianto & Tiara Andini performing Masih Hatiku (from Music Series: ArTi Semestinya Cinta) © 2024 Universal Music Indonesia\n\nhttp://vevo.ly/WhFrd8",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/QhubX_VQogk/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/QhubX_VQogk/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/QhubX_VQogk/hqdefault.jpg",
              width: 480,
              height: 360,
            },
            standard: {
              url: "https://i.ytimg.com/vi/QhubX_VQogk/sddefault.jpg",
              width: 640,
              height: 480,
            },
            maxres: {
              url: "https://i.ytimg.com/vi/QhubX_VQogk/maxresdefault.jpg",
              width: 1280,
              height: 720,
            },
          },
          channelTitle: "ArsyWidiantoVEVO",
          tags: [
            "Arsy",
            "Widianto",
            "Tiara",
            "Andini",
            "Masih",
            "Hatiku",
            "Universal",
            "Music",
            "Indonesia",
            "Pop",
            "cintanya aku",
            "ArTi",
            "bahaya",
            "bahaya korea",
            "diam diam",
            "Arti untuk cinta",
          ],
          categoryId: "10",
          liveBroadcastContent: "none",
          localized: {
            title:
              "Arsy Widianto, Tiara Andini - Masih Hatiku (Official Music Video)",
            description:
              "Arsy Widianto & Tiara Andini’s official music video for single ‘Masih Hatiku’ (from Music Series: ArTi Semestinya Cinta)\nDownload and Stream: https://lnk.to/ArTiMasihHatikuVD \n#ArTiMasihHatiku #ArsyWidianto #TiaraAndini\n\nMusic Series: ArTi Semestinya Cinta\nEpisode 1: Lagu Pernikahan Kita https://youtu.be/ZeFpigRaXbI \n\nAudio:\nComposer: Yovie Widianto\nLyrics: Arsy Widianto\nProducer: Yovie Widianto & Adrian Kitut\nEP/Keys & Program: Adrian Kitut \nStrings Arranger: Ari Renaldi\nGuitar: Devinza Kendranata\nVocal Director: Bowo Soulmate & Dennis Nussy\nOrchestra: Budapest Scoring Orchestra\nDigital Editor: Heri Alesis \nRec Engineer: Yusup Albantani & Rioexondul\nRecorded at GS 03 UK Studio \nMixed & Mastered by Ari Renaldi at ARU Studio\n\nMusic Video:\nMusic Video Production by Nocturnal Projects\nConcept by Yovie Widianto\nDirected by Jessy Sylviani & Bobby Adrian V\nProducer: Jessy Sylviani\nCinematographer: Bobby Adrian V\nProduction Assistant: Jonas Awi\nEditor: Bobby Adrian V\nSound Designer: Alvin Wardiman\nMUA: Vina Vania\nStylist:  FaberyFab\nSupporting Talent: Kyla Kameron\n\nFollow Arsy Widianto:\nInstagram: https://www.instagram.com/arsywidianto/   \nTikTok: https://www.tiktok.com/@arsywidianto26 \nYouTube: https://www.youtube.com/@arsywidianto7627    \nTwitter: https://twitter.com/arsywidianto   \nFacebook: https://www.facebook.com/arsywidiantoo/  \n\nFollow Tiara Andini: \nInstagram: https://www.instagram.com/tiaraandini/   \nYouTube: https://www.youtube.com/@tiaraandiniofficial\nTikTok: https://www.tiktok.com/@initiaraandini\nTwitter: https://twitter.com/initiaraandini   \nFacebook: https://www.facebook.com/TiaraIdol10/      \n\nLyrics:\naku tepat ada di sampingmu\nbertahan menunggu satunya cintaku\nmengapa dulu kau ragukan aku\nsesali diriku melangkah dengannya\n\nsungguhkah aku untukmu\nkenyataan masih untuknya\nku cemburu namun hanya sebatas itu\n\nkemana hati kau bawa\ntanpa pernah jelas akhirnya\nku menunggu kenyataannya kau di sana\nadakah hatimu masih hatiku\n\nbila kau lihat daun berguguran\nlaksana patahnya ranting hatiku\ningin aku kembali denganmu\nrasanya kulihat kau juga tak mungkin\n\nsungguhkah aku untukmu\nkenyataan masih untuknya\nku cemburu namun hanya sebatas itu\n\nkemana hati kau bawa\ntanpa pernah jelas akhirnya\nku menunggu kenyataannya kau di sana\nadakah hatimu masih hatiku\n\ninginkan dirimu\nmerindu dirimu\nberharap semesta satukan kita\n\nbila tak mungkin\ndan terikat dirinya\nharuskah aku mengalah\nharuskah aku menjauh\n\nku cemburu namun hanya sebatas itu\nkemana hati kau bawa\ntanpa pernah jelas akhirnya\nku menunggu kenyataannya kau di sana\nadakah hatimu masih hatiku\n\nkenyataan masih untuknya\nku cemburu namun hanya sebatas itu\nkemana hati kau bawa\ntanpa pernah jelas akhirnya\n\nku menunggu kenyataannya kau di sana\nadakah hatimu masih hatiku\nsungguhkah hatimu masih milikku\nmasih milikku\n\nhmmm…\n\nOfficial Music Video by Arsy Widianto & Tiara Andini performing Masih Hatiku (from Music Series: ArTi Semestinya Cinta) © 2024 Universal Music Indonesia\n\nhttp://vevo.ly/WhFrd8",
          },
        },
        status: {
          uploadStatus: "processed",
          privacyStatus: "public",
          license: "youtube",
          embeddable: true,
          publicStatsViewable: true,
          madeForKids: false,
        },
        statistics: {
          viewCount: "5275554",
          likeCount: "70505",
          favoriteCount: "0",
          commentCount: "9266",
        },
      },
    ],
    pageInfo: {
      totalResults: 1,
      resultsPerPage: 1,
    },
  };
  return (
    <main
      suppressHydrationWarning
      className="flex flex-col gap-[24px] py-[24px] lg:flex-row"
    >
      <div className="flex flex-1 flex-col gap-3">
        {/* VideoPlayer */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          {/* <Image alt="tes" src="https://placehold.co/1280x720" fill /> */}
          <VideoPlayer
            url={`https://youtu.be/${searchParams.v}`}
            className="absolute left-0 top-0"
          />
        </div>
        {/* VideoPlayer */}

        {/* Title */}
        <h1 className=" text-[20px] font-bold leading-snug">
          {data?.items[0].snippet.title}
        </h1>
        {/* Title */}

        <div className="flex flex-wrap ">
          <div>
            <div className="flex w-full gap-x-4">
              <div className="flex gap-x-2">
                <div className="relative aspect-square h-[40px] w-[40px] overflow-hidden rounded-full pe-4">
                  <Image
                    alt="tes"
                    src="https://yt3.googleusercontent.com/5FF_yAK4Lj8v467ZvJEOcyI6kdhI5tVsgwXi2zzZv61fEAnjlwbdxpg_SaPpQDsQAo5CdBO0VA=s176-c-k-c0x00ffffff-no-rj"
                    fill
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px] font-semibold">
                    {data.items[0].snippet.channelTitle}
                  </p>
                  <span className="text-[12px] text-muted-foreground">
                    2,5 jt subscribers
                  </span>
                </div>
              </div>
              <Button className="rounded-3xl">Subscribe</Button>
            </div>
          </div>

          {/* Komponen Like dislike dll */}
          <div className="mt-5 md:ms-auto md:mt-0">
            <ButtonInteractive data={data} />
          </div>
          {/* Komponen Like dislike dll */}
        </div>

        {/* Deskripsi */}
        <DescriptionComponent data={data} />
        {/* Deskripsi */}

        {/* Lebar layar xl ke bawah */}

        <RecommendationVideoXltoBottom />

        <Button variant="outline" className="rounded-3xl xl:hidden">
          Lebih Banyak
        </Button>
        {/* Lebar layar xl ke bawah */}

        {/* Komentar */}
        <CommentComponent data={data} />
        {/* Komentar */}
      </div>

      <div className="w-full lg:w-[405px]">
        <div className="flex flex-col gap-3">
          {/* Lebar layar xl ke atas */}

          <RecommendationVideoXLToUp />
        </div>
        {/* Lebar layar xl ke atas */}
      </div>
    </main>
  );
}
