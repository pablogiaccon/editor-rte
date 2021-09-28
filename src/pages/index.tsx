import dynamic from 'next/dynamic';

const EditorContainer = dynamic(() => import('components/EditorContainer'), {
  ssr: false,
});

import {Container} from 'styles/Home'

const Home = () => {
  return <Container>
    <EditorContainer />
  </Container>;
};

export default Home;
