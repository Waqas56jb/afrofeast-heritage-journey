import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";

export default function DatingDiscussionPage() {
  return (
    <main className="min-h-screen bg-[#EEF2F1] text-[#244848]">
      <div className="flex">
        <Sidebar />

        <div className="mx-auto w-full max-w-5xl px-6 py-8">
          {/* Breadcrumbs */}
          <div className="text-[12px] text-[#6B7280]">
            Love Hub <span className="mx-1">›</span> Discussions <span className="mx-1">›</span>{" "}
            Dating across cultures…
          </div>

          {/* Thread card */}
          <section className="mt-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E5E7EB]">
            <h1 className="text-xl font-semibold">Dating across cultures - Ghana/US</h1>
            <div className="mt-1 text-[12px] text-[#6B7280]">
              Started by @AmaraJ · 2 days ago · 47 replies
            </div>

            {/* Post 1 */}
            <article className="mt-5 border-t border-[#E5E7EB] pt-5">
              <div className="text-[13px] font-medium">
                @AmaraJ <span className="ml-2 text-[#9CA3AF]">Heritage Seeker · Chicago</span>
              </div>
              <p className="mt-2 text-[14px] text-[#374151]">
                I'm planning my heritage trip to Ghana and wondering about dating dynamics. As an
                African American woman, what should I know about relationships and cultural
                expectations if I meet someone special there? Any advice from those who've navigated
                this?
              </p>
              <div className="mt-2 text-[12px] text-[#6B7280]">❤️ 23 likes · 2 days ago</div>
            </article>

            {/* Reply 1 */}
            <article className="mt-4 border-t border-[#E5E7EB] pt-4">
              <div className="text-[13px] font-medium">
                @KwameAccra <span className="ml-2 text-[#9CA3AF]">Local Guide · Accra</span>
              </div>
              <p className="mt-2 text-[14px] text-[#374151]">
                Welcome sister! The key is understanding that family approval is huge here. Take
                time to understand traditional values while being true to yourself. Many successful
                relationships bridge our cultures beautifully.
              </p>
              <div className="mt-2 flex items-center gap-4 text-[12px] text-[#6B7280]">
                <span>↩ Reply</span>
                <span>👍 18 Likes</span>
                <span>🔗 Share</span>
                <span>2 days ago</span>
              </div>
            </article>

            {/* Reply 2 */}
            <article className="mt-4 border-t border-[#E5E7EB] pt-4">
              <div className="text-[13px] font-medium">
                @SarahLondon <span className="ml-2 text-[#9CA3AF]">Cultural Explorer · UK</span>
              </div>
              <p className="mt-2 text-[14px] text-[#374151]">
                I met my husband during my heritage trip! Key things: be open about your background,
                learn some Twi phrases, and respect the pace of relationships here. It’s more
                family‑oriented than Western dating culture.
              </p>
              <div className="mt-2 flex items-center gap-4 text-[12px] text-[#6B7280]">
                <span>↩ Reply</span>
                <span>👍 15 Likes</span>
                <span>🔗 Share</span>
                <span>1 day ago</span>
              </div>
            </article>

            {/* Reply 3 */}
            <article className="mt-4 border-t border-[#E5E7EB] pt-4">
              <div className="text-[13px] font-medium">
                @MamaEfua{" "}
                <span className="ml-2 inline-block rounded bg-[#F4F1DC] px-2 py-0.5 text-[11px] text-[#6B5E2A]">
                  Cultural Consultant
                </span>
              </div>
              <p className="mt-2 text-[14px] text-[#374151]">
                Beautiful question, Amara! Remember that you’re not just dating a person – you’re
                connecting with a family and community. I offer relationship guidance sessions if
                you’d like deeper support.
              </p>
              <div className="mt-2 flex items-center gap-4 text-[12px] text-[#6B7280]">
                <span>↩ Reply</span>
                <span>👍 31 Likes</span>
                <span>🔗 Share</span>
                <span>1 day ago</span>
              </div>
              <div className="mt-2">
                <Button className="px-3 py-1 text-[12px]">Book Session</Button>
              </div>
            </article>

            {/* Reply box */}
            <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-[#FAFBFB] p-3">
              <div className="text-[13px] text-[#6B7280]">Write your reply…</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-[12px] text-[#9CA3AF]">🖼 😀 🔗</div>
                <div className="flex items-center gap-3">
                  <button className="text-[12px] text-[#6B7280]">Save Draft</button>
                  <Button className="px-4 py-1">Post Reply</Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
