import React from "react";

export default function Banner() {
  return (
    <div className="w-full bg-blue-100 flex flex-col py-[30px] justify-center items-center">
      <h1 className="text-[48px] font-bold">
        <a href="/">Miyu Blog</a>
      </h1>
      <p className="text-[14px] font-bold mt-3">
        씹덕 기질이 있으시면 제 블로그를 자주 와주세용
      </p>
    </div>
  );
}
