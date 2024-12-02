function Card(){
    return(
    <>
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://imgs.search.brave.com/BKPL4-Y-riD5cr71RPErgdVlpCjh2AJAppDZ0zKa_Dc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy93YWxr/aW5nLWRvZy1yb3lh/bHR5LWZyZWUtaW1h/Z2UtMTY4NjY3NzAx/OC5qcGc_Y3JvcD0w/LjY2OHh3OjEuMDB4/aDswLjA4MTd4dyww/JnJlc2l6ZT0zNjA6/Kg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that Ive seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </>)
}

export default Card