import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
export default function KakoRedirectPage() {
  const program = useSelector((state) => state.data);
  const PARAMS = new URL(document.location).searchParams;
  const KAKAO_CODE = PARAMS.get("code");
  const grant_type = "authorization_code";
  const client_id = `${process.env.REACT_APP_REST_API_KEY}`;
  const client_secret = "BfBuPh9NYOL8UiR7lHgHf25u24l4RCzk";

  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
  const navigate = useNavigate();

  useEffect(() => {}, []);

  useEffect(() => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri${REDIRECT_URI}&code=${KAKAO_CODE}&client_secret=${client_secret}`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        const { access_token } = res.data;

        axios
          .post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          )
          .then((res) => {
            localStorage.clear();
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("data", JSON.stringify(res.data));
            navigate("/main");
          })
          .catch((error) => {
            console.log("2번쨰 error", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [KAKAO_CODE]);

  return <div> Loading...</div>;
}
