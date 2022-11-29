import Header from "../components/shared/Header";
import TopicSidebar from "../components/shared/TopicSidebar";
import ProblemList from "../components/shared/ProblemList";
import ProblemPane from "../components/shared/ProblemPane/ProblemPane";

export default function Home() {
  return (
    <div className="w-screen min-h-screen h-screen  bg-gray-900 flex flex-col">
      {/* Header with logo on left and dark mode toggle on right */}
      <Header />
      <div className="w-screen h-full flex overflow-hidden">
        <TopicSidebar />
        <ProblemList />
        <ProblemPane />
      </div>
    </div>
  );
}
