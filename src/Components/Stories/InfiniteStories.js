import React, { useState, useEffect } from "react";
import urlMetadata from "url-metadata";
import { DEFAULT_IMAGE } from "./Constant";
import {
  LoadMoreDiv,
  Button,
  UL,
  LI,
  Anchor,
  ArticleContainer,
  ArticleImage,
  PostCategory,
  PostExcerpt,
  PostExcerptTitle
} from "./StoriesFragments";

const InfiniteStories = props => {
  const [pageSize] = useState(10);
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

  const scrollListener = bypass => {
    if (!loading) {
      const list = document.getElementById("list");
      const maxLimit = list.clientHeight + list.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (
        (scrollPosition >= maxLimit - 30 && scrollPosition < maxLimit + 300) ||
        bypass === true
      ) {
        // New page has to be loaded
        let newLast = (lastId || 1) + pageSize;
        setLastId(newLast);
        setLoading(true);
        newLast !== 0 && getNextPage(ids, newLast);
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
            scrollListener(true);
          }}
        >
          {loading ? "Loading" : "More posts"}
        </Button>
      </LoadMoreDiv>
    </section>
  );
};

export default InfiniteStories;
