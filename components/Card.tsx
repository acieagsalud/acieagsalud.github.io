import type { CSSProperties } from "react";
import type { WorkItem } from "@/data/content";
import { Icon } from "./Icon";

export const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function Card({ item, index }: { item: WorkItem; index: number }) {
  return (
    <article className="card lift reveal" style={delay(index * 0.1)}>
      <div className="icon"><Icon name={item.icon} /></div>
      <h3>{item.title}</h3>
      <p className="ctx">{item.context}</p>
      {item.body.map((p) => <p key={p}>{p}</p>)}
      {item.stat && <p className="stat">{item.stat}</p>}
      <ul className="tags" aria-label="Skills used">
        {item.tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
      {item.links && (
        <p className="links">
          {item.links.map((l) => <a key={l.label} href={l.href}>{l.label} →</a>)}
        </p>
      )}
    </article>
  );
}

export function SectionHead({ eyebrow, title, id, text }: { eyebrow: string; title: string; id: string; text?: string }) {
  return (
    <div className="head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
