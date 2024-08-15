import io from "socket.io-client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header.js";
import Head from "next/head";

let socket;

type Message = {
  author: string;
  message: string;
};

export default function Home() {
  return (
    <>
      <Head>
        <div className="hidden">
          <img src="/talks.png" />
          <img src="/talks_highlight.png" />
          <img src="/writing.png" />
          <img src="/writing_highlight.png" />
          <img src="/work.png" />
          <img src="/work_highlight.png" />
          <img src="/projects.png" />
          <img src="/projects_highlight.png" />

          <img src="/goodnews.png" />
          <img src="/abuse.png" />
          <img src="/greatdesign.png" />

          <img src="/book1.png" />
          <img src="/book2.png" />
          <img src="/book3.png" />
          <img src="/bedtime.png" />
          <img src="/42and21.png" />
          <img src="/plebe.png" />
        </div>
      </Head>
      <Header />
      <Body />
    </>
  );
}

export function Body() {
  return (
    <section className="flex justify-center w-screen pt-8 mx-auto mt-8 bg-blue-50 py-96">
      <div className="justify-center w-full p-2 sm:w-1/2 md:w-4/5 lg:w-4/5 xl:w-1/2 2xl:w-1/2">
        <div>
          <div className="flex justify-center">
            <div className="w-4/5 mb-8 sm:w-full">
              <div className="py-2 pl-0 text-xl font-medium sm:pl-2 sm:text-md">
                My books
              </div>
              <div className="sm:mx-2 mx-0 border-b-[1px] border-gray-300">
                {" "}
              </div>
            </div>
          </div>
        </div>

        <div className="grid mt-4 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 sm:m-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          <div className="flex justify-center">
            <div className="w-4/5 sm:w-full">
              <img src="/book1.png" className="rounded-md" />
              <div className="pt-2 font-light text-md">
                Book one features essays about product design.
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-4/5 sm:w-full">
              <img src="/book2.png" className="w-full rounded-md" />
              <div className="pt-2 font-light text-md">
                Book two is about listening well and leading teams.
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-4/5 sm:w-full">
              <img src="/book3.png" className="w-full rounded-md" />
              <div className="pt-2 font-light text-md">
                Book three is about strategy and long-term thinking.
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="grid mt-8 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 sm:m-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          <div className="flex justify-center">
            <div className="w-4/5 sm:w-full">
              <img src="/bedtime.png" className="w-full rounded-md" />
              <div className="pt-2 font-light text-md">
                Bedtime Stories is a book I wrote for my three kids ❤️
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-4/5 sm:w-full">
              <img src="/42and21.png" className="w-full rounded-md" />
              <div className="pt-2 font-light text-md">
                42 & 21 is full of life advice for my eldest son.
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-4/5 sm:w-full">
              <img src="/plebe.png" className="w-full rounded-md" />
              <div className="pt-2 font-light text-md">
                I publish a zine called Plebe, and this volume compiles its
                first decade.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
