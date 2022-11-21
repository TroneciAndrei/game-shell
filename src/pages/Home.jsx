import { StatLists } from "../components/stats";
import { AuthorizedLayout, Layout } from "../layouts";

export const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <AuthorizedLayout>
          <div className="mt-8">
            <StatLists />
          </div>
        </AuthorizedLayout>
      </div>
    </Layout>
  );
};
