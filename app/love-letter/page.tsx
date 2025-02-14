import { Heart } from "lucide-react";

export default function LoveLetter() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-lg animate-fade-in">
        <h1 className="text-3xl font-bold text-red-600 mb-4">My Dearest Bob,</h1>
        <div className="space-y-4 text-pink-800">
          <p>
            Hey love, I know I mess up a lot. Every time we fight, it kills me inside because I &apos;m the reason behind your
            tears. I see the hurt in your eyes when I disappoint you, and it breaks my heart knowing I did that to you.
          </p>
          <p>
            When you say you don &apos;t want to be with me anymore, I get scared. Really scared. Because I know I &apos;m the one
            who pushed you to this point. I know I &apos;ve given you more reasons to leave than to stay.
          </p>
          <p>
            But I love you. Not in some fancy movie way, but in that real, messy, everyday way. I love how you get
            excited about little things. I love that you call me out on my BS. I even love how stubborn you get when
            you &apos;re mad at me (even though it drives me crazy).
          </p>
          <p>
            I &apos;m not going to make big promises. You &apos;ve heard enough of those from me. Instead, I just want to say - I &apos;m
            trying. Really trying this time. Not because I &apos;m scared of losing you (though I am), but because you deserve
            better. And I want to be that better person for you.
          </p>
          <p>
            I know it won &apos;t be perfect. We &apos;ll probably still fight. I &apos;ll still mess up sometimes. But I &apos;m in this for
            real. Every day, I &apos;ll show up. Every day, I &apos;ll try harder. Because you &apos;re worth it. Because what we have is
            worth it.
          </p>
          <p>Just... don &apos;t give up on us yet. On me. I know I &apos;m asking a lot, but I love you. And I &apos;ll prove it.</p>
        </div>
        <div className="mt-8 text-right">
          <p className="text-red-600">Forever Yours,</p>
          <p className="text-red-600">Bubbz</p>
        </div>
        <div className="flex justify-center mt-8">
          <Heart className="text-red-500 animate-pulse" size={50} />
        </div>
      </div>
    </main>
  );
}
