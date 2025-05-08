import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BannerTabContent from "./banner-tab-content";
import { IMAGE } from "@/assets";

type Props = {};

export default function BannerTabs({}: Props) {
  return (
    <Tabs
      defaultValue="banner-1"
      className="h-fit rounded-card items-center justify-center p-3"
    >
      <TabsList>
        <TabsTrigger value="banner-1">Banner 1</TabsTrigger>
        <TabsTrigger value="banner-2">Banner 2</TabsTrigger>
        <TabsTrigger value="banner-3">Banner 3</TabsTrigger>
      </TabsList>

      <BannerTabContent image={IMAGE.banner1} value="banner-1" />
      <BannerTabContent image={IMAGE.banner2} value="banner-2" />
      <BannerTabContent image={IMAGE.banner3} value="banner-3" />
    </Tabs>
  );
}
