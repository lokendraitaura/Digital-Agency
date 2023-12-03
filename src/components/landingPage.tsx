import React, { useEffect, useMemo } from "react";
import Home from "./home/home";
import { Container } from "../styles/styled";
import OurServices from "./ourServices/ourServices";
import OurBlog from "./ourBlogs/ourBlog";
import FooterPage from "./footerPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions";
import { RootState } from "../store/store";
import Loading from "./Loading";
import Error from "./error";

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchData());
  }, [dispatch]);

  const memoizedData = useMemo(() => data, [data]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <>
      <Container>
        <Home />
        <OurServices />
        <OurBlog blogs={memoizedData} />
      </Container>
      <FooterPage />
    </>
  );
};
export default LandingPage;
