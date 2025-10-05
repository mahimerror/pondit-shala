import {
  ArrowIcon,
  ClockIcon,
  PeopleIcon,
  TodoIcon,
} from "@/assets/icons/icons";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CoursesSeminarSec = ({ className = "" }) => {
  return (
    <section className={cn("min-h-screen", className)}>
      <Container className="space-y-14">
        <div className="flex flex-col items-center justify-center">
          <div className="px-2 py-1 bg-[#353535]">
            <p className="font-medium">Courses & Seminars</p>
          </div>
          <h2 className="text-[40px] leading-[1.2] font-bold mt-1">
            Courses & Seminars
          </h2>
          <div className="h-2 bg-white w-28 rounded-full mt-6"></div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <CourseCard />
        </div>
      </Container>
    </section>
  );
};

export default CoursesSeminarSec;

const CourseCard = () => {
  return (
    <div className="bg-[#2F2F2F] border-4 border-[#383838] rounded-2xl overflow-hidden h-[300px] col-span-2 flex items-center">
      <figure className="left flex-1 min-h-[280px] h-full">
        <img
          src="https://i.ibb.co.com/kgjP9GHN/pondit.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </figure>
      <div className="right flex-1 p-6">
        <div className="top-bar flex gap-3 items-center pb-1.5 border-b border-b-[#3B3B3B]">
          <div className="flex items-center gap-1 text-sm font-bold">
            <TodoIcon />
            <p>21 Sections</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-bold">
            <ClockIcon />
            <p>72h 36m</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-bold">
            <PeopleIcon />
            <p>99 Students</p>
          </div>
        </div>
        <div className="pt-2">
          <h4>Complete Vanilla JavaScript Course (Zero to Expert)</h4>
          <p className="mt-1">by Mahmudul Hasan</p>
          <div className="mt-3"></div>
          <div className="mt-5">
            <Button className="rounded-full bg-white text-black ">
              View Plan <ArrowIcon />
            </Button>
          </div> 
        </div>
      </div> 
    </div>
  );
};
