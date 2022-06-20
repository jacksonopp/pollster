import { trpc } from '../utils/trpc';
import { NextPageWithLayout } from './_app';
import Link from 'next/link';

const IndexPage: NextPageWithLayout = () => {
  const utils = trpc.useContext();
  const postsQuery = trpc.useQuery(['post.all']);
  const addPost = trpc.useMutation('post.add', {
    async onSuccess() {
      // refetches posts after a post is added
      await utils.invalidateQueries(['post.all']);
    },
  });

  return (
    <>
      <p>hey</p>
    </>
  );
};

export default IndexPage;
