import React, { useState, useEffect } from "react";
import styled from "styled-components";
import urlMetadata from "url-metadata";
import { DEFAULT_IMAGE } from "./Constant";

const InfiniteStories = props => {
  const [pageSize, setPageSize] = useState(10);
  const [ids, setIds] = useState([]);
  const [evenIds, setEvenIds] = useState([]);
  const [oddIds, setOddIds] = useState([]);
  const [stories, setStories] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStories([]);
    let idToProcess = !props.filter
      ? ids
      : props.filter === "even"
      ? evenIds
      : oddIds;
    !(!idToProcess || idToProcess.length === 0) && getNextPage(idToProcess, 0);
    console.log("Use effect called");
  }, [props.filter]);

  useEffect(() => {
    getStories();
  }, []);

  const scrollListener = () => {
    console.log("loading", loading);
    if (!loading) {
      const list = document.getElementById("list");
      const maxLimit = list.clientHeight + list.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition >= maxLimit && scrollPosition < maxLimit + 10) {
        // New page has to be loaded
        let newLast = (lastId || 1) + pageSize;
        setLastId(newLast);
        setLoading(true);
        newLast != 0 && getNextPage(ids, newLast);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [loading, lastId]);

  const getStories = () => {
    return fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    )
      .then(res => {
        return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
      })
      .then(res => {
        setIds(res);
        setEvenIds(
          res.filter((id, index, arr) => {
            return (index + 1) % 2 === 0;
          })
        );
        setOddIds(
          res.filter((id, index, arr) => {
            return (index + 1) % 2 !== 0;
          })
        );
        return res;
      })
      .then(i => getNextPage(i, 0))
      .catch(console.log);
  };
  let loadedArticles = [];
  const getNextPage = (ids, lastId) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    loadedArticles = [];
    let promises = [];
    ids
      .filter((id, index, arr) => {
        return index >= lastId && index < (lastId || 1) + pageSize;
      })
      .map(id =>
        promises.push(
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => {
              return !res.ok
                ? res.json().then(e => Promise.reject(e))
                : res.json();
            })
            .then(res => {
              return (
                res.url &&
                urlMetadata(proxyurl + res.url).then(
                  function(metadata) {
                    // success handler
                    const image = metadata["og:image"] || DEFAULT_IMAGE;
                    const story = { ...res, image };
                    if (story.id === ids[0]) {
                      props.setFeature(story);
                    } else {
                      loadedArticles.push(story);
                    }
                  },
                  function(error) {
                    // failure handler
                    const story = { ...res, image: DEFAULT_IMAGE };
                    loadedArticles.push(story);
                  }
                )
              );
            })
            .catch(e => {
              console.log(e);
            })
        )
      );
    Promise.all(promises).then(function() {
      setStories(prevState => [...prevState, ...loadedArticles]);
      setLoading(false);
    });
  };

  //   useEffect(() => {}, []);

  const LoadMoreDiv = styled.div`
    background: linear-gradient(hsla(0, 0%, 100%, 0), #f9f8f6);
    height: 390px;
    margin-top: -370px;
    pointer-events: none;
    position: relative;
    text-align: center;
    z-index: 2;
  `;

  const Button = styled.div`
    bottom: 0;
    left: 50%;
    margin-left: -90px;
    pointer-events: auto;
    position: absolute;
    width: 180px;
    font-family: FuturaBT-Book, sans-serif;
    font-size: 18px;
    font-weight: 300;
    background: #ffb21a;
    border-radius: 52px;
    color: #fff;
    padding: 16px 20px 15px;
    text-decoration: none;
    transition: background 80ms linear, opacity 1s linear;
    white-space: nowrap;
  `;

  const UL = styled.ul`
    position: relative;
    margin: 40px auto 0;
    width: 100%;
  `;

  const LI = styled.li`
    background: #f2efeb;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
    @media (min-width: 620px) {
      width: calc(50% - 10px);
      margin-left: 10px;
    }
    float: left;
    &:nth-child(odd) {
      clear: both;
      display: table;
    }
  `;

  const Anchor = styled.a`
    color: inherit;
    text-decoration: none;
  `;

  const ArticleContainer = styled.div`
    display: block;
    height: 0;
    overflow: hidden;
    padding-bottom: 60%;
    position: relative;
    width: 100%;
    background-color: white;
  `;

  const ArticleImage = styled.img`
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    float: left;
    width: 100%;
  `;

  const PostExcerpt = styled.div`
    background: #fff;
    clear: both;
    line-height: 28px;
    padding: 30px 30px 15px;
  `;

  const PostExcerptTitle = styled.h3`
    font-family: FuturaBT-Heavy, sans-serif;
    font-size: inherit;
    font-weight: 100;
    font-size: 24px;
    letter-spacing: -0.03em;
    line-height: 32px;
    margin: 10px 0 20px;
  `;

  const PostCategory = styled.span`
    font-family: FuturaBT-Heavy, sans-serif;
    font-size: 14px;
    font-weight: 100;
    letter-spacing: 2px;
    opacity: 0.4;
    text-transform: uppercase;
  `;
  return (
    <section className="mt-24">
      <div>
        <UL id="list">
          {stories.map((story, index) => (
            <LI key={index}>
              <Anchor href={story.url}>
                <ArticleContainer>
                  <ArticleImage alt="1" src={story.image} />
                </ArticleContainer>

                <PostExcerpt className="post-excerpt">
                  <PostCategory>Money Diaries</PostCategory>
                  <PostExcerptTitle className="post-excerpt-title">
                    {story.title}
                  </PostExcerptTitle>
                </PostExcerpt>
              </Anchor>
            </LI>
          ))}
          <li style={{ clear: "both" }}></li>
        </UL>
      </div>
      <div style={{ clear: "both" }}></div>
      <LoadMoreDiv>
        <Button
          href="#"
          data-category="?category_id=money-diaries"
          disabled={loading}
          onClick={() => {
            setLastId(p => p || 1 + pageSize);
          }}
        >
          {loading ? "Loading" : "More posts"}
        </Button>
      </LoadMoreDiv>
    </section>
  );
};

export default InfiniteStories;
