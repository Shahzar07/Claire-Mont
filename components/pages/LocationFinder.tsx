'use client';

import { useMemo, useState } from 'react';
import type { AreaGroup } from '@/lib/areas';

export default function LocationFinder({ groups, total }: { groups: AreaGroup[]; total: number }) {
  const [query, setQuery] = useState('');
  const needle = query.trim().toLowerCase();

  const visible = useMemo(() => {
    if (!needle) return groups;
    return groups
      .map((group) => ({
        ...group,
        places: group.places.filter((place) => place.toLowerCase().includes(needle)),
      }))
      .filter((group) => group.places.length > 0);
  }, [groups, needle]);

  const shown = visible.reduce((count, group) => count + group.places.length, 0);

  return (
    <div className="area-finder">
      <div className="area-finder__bar">
        <label className="field area-finder__field">
          <span className="field__label" id="area-search-label">Find a town or borough</span>
          <input
            className="field__input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Croydon, Guildford, Watford…"
            aria-labelledby="area-search-label"
            autoComplete="off"
          />
        </label>
        <p className="area-finder__count" aria-live="polite">
          {needle ? `${shown} of ${total}` : `${total} areas`}
        </p>
      </div>

      {visible.length === 0 ? (
        <p className="area-finder__empty">
          Nothing matches “{query.trim()}”. Try a shorter name, or send the postcode with the E-Survey and we will confirm it.
        </p>
      ) : (
        visible.map((group) => (
          <section className="area-group" key={group.region} aria-labelledby={`area-${group.region.replace(/\s+/g, '-').toLowerCase()}`}>
            <h3 id={`area-${group.region.replace(/\s+/g, '-').toLowerCase()}`}>
              {group.region}
              <span>{group.places.length}</span>
            </h3>
            <ul>
              {group.places.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
