import { Button, Page } from "@shopify/polaris";

const Video = () => (
  <Page
    breadcrumbs={[{content: 'Home', url: '/'}]}
    title="Sync Videos"
    primaryAction={
      <Button
        primary
      >
        Sync
      </Button>
    }
  >
    <p>Products with associated videos will be synced from S3 bucket.</p>
  </Page>
)
export default Video;