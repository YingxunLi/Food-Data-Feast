import cases from "./InfoGraphic_country_table.js";

const LEVELS = ["No", "Low", "Medium", "High"];
const LEVEL_COLORS = {
  No: "#B91928",
  Low: "#F39600",
  Medium: "#F2CF00",
  High: "#689C65",
};
const LEVEL_ORDER = ["No", "Low", "Medium", "High"];
// Country fireworks quadrants use a fixed visual order.
const COUNTRY_LEVEL_ORDER = ["High", "Medium", "Low", "No"];
const COUNTRY_QUADRANTS = COUNTRY_LEVEL_ORDER.map((level) => ({
  level,
  color: LEVEL_COLORS[level],
}));

const COUNTRY_META = {
  AT: { name: "Austria" },
  BE: { name: "Belgium" },
  BG: { name: "Bulgaria" },
  CH: { name: "Switzerland" },
  CZ: { name: "Czechia" },
  DE: { name: "Germany" },
  DK: { name: "Denmark" },
  EE: { name: "Estonia" },
  ES: { name: "Spain" },
  FI: { name: "Finland" },
  FR: { name: "France" },
  GR: { name: "Greece" },
  HR: { name: "Croatia" },
  HU: { name: "Hungary" },
  IE: { name: "Ireland" },
  IT: { name: "Italy" },
  LT: { name: "Lithuania" },
  LV: { name: "Latvia" },
  NL: { name: "Netherlands" },
  NO: { name: "Norway" },
  PL: { name: "Poland" },
  PT: { name: "Portugal" },
  RO: { name: "Romania" },
  SE: { name: "Sweden" },
  SL: { name: "Slovenia" },
  SK: { name: "Slovakia" },
  UK: { name: "United Kingdom" },
};

const FOOD_GUIDELINE_GROUP = {
  "Whole grains": "encourage",
  Vegetables: "encourage",
  Fruits: "encourage",
  "Fish and shellfish": "encourage",
  Legumes: "encourage",
  Nuts: "encourage",
  "All plant oils and plant margarines": "encourage",
  "Tubers or Starches": "balance",
  "Dairy Food": "balance",
  "Beef, lamb, goat, pork, and red meat in its processed form": "balance",
  "Chicken and other poultry": "balance",
  Eggs: "balance",
  "Animal fats and other saturated fats": "limit",
  "Added sugars": "limit",
};

const FOOD_GUIDELINE_ORDER = ["encourage", "balance", "limit"];
const FOOD_GUIDELINE_LABEL = {
  encourage: "To encourage",
  balance: "To balance",
  limit: "To limit",
};

const FOOD_DISPLAY_NAMES = {
  "All plant oils and plant margarines": "Oils",
  "Animal fats and other saturated fats": "Fats",
  "Beef, lamb, goat, pork, and red meat in its processed form": "Red meats",
  "Chicken and other poultry": "Poultry",
  "Fish and shellfish": "Fish",
  "Tubers or Starches": "Tubers",
};

const FOOD_RECOMMENDED_RANGE = {
  "Whole grains": "232 g/day",
  Vegetables: "300 g/day",
  Fruits: "200 g/day",
  "Fish and shellfish": "28 g/day",
  Legumes: "75 g/day",
  Nuts: "50 g/day",
  "All plant oils and plant margarines": "40 g/day",
  "Tubers or Starches": "50 g/day",
  "Dairy Food": "250 g/day",
  "Beef, lamb, goat, pork, and red meat in its processed form": "14 g/day",
  "Chicken and other poultry": "29 g/day",
  Eggs: "13 g/day",
  "Animal fats and other saturated fats": "11-12 g/day",
  "Added sugars": "31 g/day",
};

const countries = cases.filter((c) => c.country !== "Total");
const foods = getFoods(countries);
const urlParams = new URLSearchParams(window.location.search);

const initialCountry = (() => {
  const country = urlParams.get("country");
  const valid = country && country !== "Total" && countries.some((c) => c.country === country);
  return valid ? country : "Total";
})();

const initialFood = (() => {
  const food = urlParams.get("food");
  return food && foods.includes(food) ? food : foods[0];
})();

const initialViewMode = urlParams.get("view") === "country" ? "country" : "overview";

const state = {
  selectedCountry: initialCountry,
  selectedFood: initialFood,
  viewMode: initialViewMode,
  svg: null,
};

if (state.viewMode === "country" && state.selectedCountry === "Total") {
  state.selectedCountry = countries[0]?.country || "Total";
}

const countrySelectRootEl = document.querySelector("#countrySelectRoot");
const countrySelectButtonEl = document.querySelector("#countrySelectButton");
const countrySelectListEl = document.querySelector("#countrySelectList");
const countrySelectEl = document.querySelector("#countrySelect");
const summaryTextEl = document.querySelector("#summaryText");
const donutChartEl = document.querySelector("#donutChart");
const donutLegendEl = document.querySelector("#donutLegend");
const exploreLabelEl = document.querySelector("#exploreLabel");
const exploreButtonEl = document.querySelector("#exploreButton");
const exploreArrowEl = exploreButtonEl?.querySelector(".arrow");
const overviewNavLinkEl = document.querySelector("#overviewNavLink");
const countryNavLinkEl = document.querySelector("#countryNavLink");
const foodPickerEl = document.querySelector("#foodPicker");
const mapEl = document.querySelector("#map");
const tooltipEl = document.querySelector("#tooltip");
const layoutEl = document.querySelector(".layout");
const panelEl = document.querySelector(".panel");
const countryUnderlayEl = document.querySelector("#countryUnderlay");
const countryModeContentEl = document.querySelector("#countryModeContent");
const countryChartEl = document.querySelector("#countryChart");
const topNavEl = document.querySelector("#topNav");
const desktopTopNavSlotEl = document.querySelector("#desktopTopNavSlot");
const mobileTopNavSlotEl = document.querySelector("#mobileTopNavSlot");

init();

function init() {
  renderCountrySelect();
  renderFoodPicker();
  renderLeftPanel();
  loadSvgAndRenderMap();
  syncCountryUnderlayWidth();
  syncTopNavPlacement();
  applyViewModeState();

  exploreButtonEl.addEventListener("click", () => {
    if (state.viewMode === "country") {
      setViewMode("overview");
      return;
    }
    setViewMode("country");
  });

  countryNavLinkEl.addEventListener("click", (event) => {
    event.preventDefault();
    setViewMode("country");
  });

  overviewNavLinkEl.addEventListener("click", (event) => {
    event.preventDefault();
    setViewMode("overview");
  });

  countrySelectButtonEl.addEventListener("click", () => {
    toggleCountryDropdown();
  });

  document.addEventListener("click", (event) => {
    if (!countrySelectRootEl.contains(event.target)) {
      closeCountryDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCountryDropdown();
    }
  });

  countrySelectEl.addEventListener("change", () => {
    setSelectedCountry(countrySelectEl.value);
  });

  window.addEventListener("resize", debounce(() => {
    syncCountryUnderlayWidth();
    syncTopNavPlacement();
  }, 120));
}

function syncTopNavPlacement() {
  if (!topNavEl || !desktopTopNavSlotEl || !mobileTopNavSlotEl) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 860px)").matches;
  const targetSlot = isMobile ? mobileTopNavSlotEl : desktopTopNavSlotEl;
  if (topNavEl.parentElement !== targetSlot) {
    targetSlot.appendChild(topNavEl);
  }

  mobileTopNavSlotEl.setAttribute("aria-hidden", isMobile ? "false" : "true");
}

function renderCountrySelect() {
  const countryCodes = countries
    .map((c) => c.country)
    .sort((a, b) => displayCountry(a).localeCompare(displayCountry(b)));

  const options = ["Total", ...countryCodes];
  countrySelectEl.innerHTML = "";
  countrySelectListEl.innerHTML = "";

  for (const code of options) {
    const name = displayCountry(code);

    const option = document.createElement("option");
    option.value = code;
    option.textContent = name;
    countrySelectEl.appendChild(option);

    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "country-select-option";
    button.setAttribute("role", "option");
    button.dataset.value = code;
    button.setAttribute("aria-selected", code === state.selectedCountry ? "true" : "false");
    button.textContent = name;
    button.addEventListener("click", () => {
      setSelectedCountry(code);
      closeCountryDropdown();
    });

    li.appendChild(button);
    countrySelectListEl.appendChild(li);
  }

  countrySelectEl.value = state.selectedCountry;
  countrySelectButtonEl.textContent = displayCountry(state.selectedCountry);
}

function toggleCountryDropdown() {
  const isOpen = countrySelectRootEl.classList.toggle("is-open");
  countrySelectButtonEl.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function closeCountryDropdown() {
  countrySelectRootEl.classList.remove("is-open");
  countrySelectButtonEl.setAttribute("aria-expanded", "false");
}

function setSelectedCountry(code) {
  state.selectedCountry = code;
  countrySelectEl.value = code;
  countrySelectButtonEl.textContent = displayCountry(code);

  const optionButtons = countrySelectListEl.querySelectorAll(".country-select-option");
  for (const optionButton of optionButtons) {
    optionButton.setAttribute("aria-selected", optionButton.dataset.value === code ? "true" : "false");
  }

  renderLeftPanel();
  renderMap();
  if (state.viewMode === "country") {
    if (code === "Total") {
      setViewMode("overview");
      return;
    }
    renderCountryMode();
  }
}

function renderFoodPicker() {
  foodPickerEl.innerHTML = "";

  const groupedFoods = new Map(FOOD_GUIDELINE_ORDER.map((group) => [group, []]));
  for (const food of foods) {
    const group = FOOD_GUIDELINE_GROUP[food] || "balance";
    groupedFoods.get(group).push(food);
  }

  for (const group of FOOD_GUIDELINE_ORDER) {
    const foodsInGroup = groupedFoods.get(group) || [];
    if (!foodsInGroup.length) {
      continue;
    }

    const row = document.createElement("div");
    row.className = "food-group-row";

    const title = document.createElement("span");
    title.className = "food-group-title";
    title.textContent = FOOD_GUIDELINE_LABEL[group] || group;

    const options = document.createElement("div");
    options.className = "food-group-options";

    for (const food of foodsInGroup) {
      const id = `food-${slug(food)}`;
      const label = document.createElement("label");
      label.className = "food-option";
      label.setAttribute("for", id);

      const input = document.createElement("input");
      input.id = id;
      input.type = "radio";
      input.name = "food-choice";
      input.value = food;
      input.checked = food === state.selectedFood;

      const box = document.createElement("span");
      box.className = "food-box";

      const text = document.createElement("span");
      text.textContent = displayFoodName(food);

      input.addEventListener("change", () => {
        state.selectedFood = food;
        renderLeftPanel();
        renderMap();
        if (state.viewMode === "country") {
          renderCountryMode();
        }
      });

      label.append(input, box, text);
      options.appendChild(label);
    }

    row.append(title, options);
    foodPickerEl.appendChild(row);
  }
}

async function loadSvgAndRenderMap() {
  try {
    const response = await fetch("./europe.svg");
    const svgText = await response.text();

    const wrapper = document.createElement("div");
    wrapper.id = "mapSvgContainer";
    wrapper.innerHTML = svgText;

    const existingWrapper = mapEl.querySelector("#mapSvgContainer");
    if (existingWrapper) {
      existingWrapper.remove();
    }

    const loadingEl = mapEl.querySelector(".loading");
    if (loadingEl) {
      loadingEl.remove();
    }

    mapEl.appendChild(wrapper);

    state.svg = wrapper.querySelector("svg");
    renderMap();
  } catch (error) {
    const existingWrapper = mapEl.querySelector("#mapSvgContainer");
    if (existingWrapper) {
      existingWrapper.remove();
    }

    let loadingEl = mapEl.querySelector(".loading");
    if (!loadingEl) {
      loadingEl = document.createElement("p");
      loadingEl.className = "loading";
      mapEl.appendChild(loadingEl);
    }
    loadingEl.textContent = "Map failed to load.";
    console.error(error);
  }
}

function renderMap() {
  if (!state.svg) {
    return;
  }

  const mapInteractionLocked = state.viewMode === "country";
  const countryData = buildCountryDataByFood(state.selectedFood);
  const paths = state.svg.querySelectorAll("path");

  for (const path of paths) {
    const code = path.id;
    const data = countryData.get(code);

    if (!data) {
      path.dataset.noData = "true";
      path.setAttribute("fill", "#f8f7f4");
      path.style.cursor = "default";
      path.onmousemove = null;
      path.onmouseleave = null;
      path.onclick = null;
      continue;
    }

    path.dataset.noData = "false";
    path.setAttribute("fill", LEVEL_COLORS[data.dominant.level]);
    path.style.cursor = mapInteractionLocked ? "default" : "pointer";

    const hasSelectedCountry = state.selectedCountry !== "Total";
    const isSelected = state.selectedCountry === code;
    path.style.stroke = "#ded8cf";
    path.style.strokeWidth = "0.6";
    path.style.opacity = hasSelectedCountry && !isSelected ? "0.34" : "1";

    if (mapInteractionLocked) {
      path.onmousemove = null;
      path.onmouseleave = null;
      path.onclick = null;
      continue;
    }

    path.onmousemove = (event) => {
      // Hover state: adjust opacity based on selection
      if (hasSelectedCountry) {
        path.style.opacity = isSelected ? "1" : "0.65";
      } else {
        path.style.opacity = "0.65";
      }

      tooltipEl.style.opacity = "1";
      tooltipEl.style.left = `${event.clientX + 12}px`;
      tooltipEl.style.top = `${event.clientY + 12}px`;
      tooltipEl.innerHTML = [
        `<strong class="tooltip-country-title">${displayCountry(code)}</strong>`,
        `Food: ${displayFoodName(state.selectedFood)}`,
        `<strong>Dominant: ${data.dominant.level} (${data.dominant.value.toFixed(1)}%)</strong>`,
        `No: ${data.values.No.toFixed(1)}%`,
        `Low: ${data.values.Low.toFixed(1)}%`,
        `Medium: ${data.values.Medium.toFixed(1)}%`,
        `High: ${data.values.High.toFixed(1)}%`,
      ].join("<br>");
    };

    path.onmouseleave = () => {
      // Restore to non-hover state based on selection
      path.style.opacity = hasSelectedCountry && !isSelected ? "0.34" : "1";
      tooltipEl.style.opacity = "0";
    };

    path.onclick = () => {
      setSelectedCountry(code);
    };
  }
}

function renderLeftPanel() {
  const entry = findCountryEntry(state.selectedCountry);
  if (!entry) {
    return;
  }

  const values = getFoodLevelValues(entry, state.selectedFood);
  const dominant = findDominant(values);

  summaryTextEl.textContent = buildSummarySentence(state.selectedFood, dominant);

  donutChartEl.style.background = `conic-gradient(${buildDonutGradient(values)})`;
  donutChartEl.innerHTML = `<div class="donut-center">${displayFoodName(state.selectedFood)}</div>`;

  donutLegendEl.innerHTML = "";
  const legendLevels = ["High", "Medium", "Low", "No"];
  const maxValue = Math.max(...legendLevels.map((level) => values[level]), 0);
  for (const level of legendLevels) {
    const value = values[level];
    const widthPercent = maxValue > 0 ? (value / maxValue) * 100 : 0;
    const li = document.createElement("li");
    li.dataset.level = level;
    li.innerHTML = `
      <span class="legend-value">${value.toFixed(1)}%&nbsp;&nbsp;&nbsp;${level}</span>
      <span class="legend-line" aria-label="${level.toLowerCase()} level ${value.toFixed(1)} percent">
        <span class="legend-line-fill" style="width:${Math.max(0, Math.min(100, widthPercent)).toFixed(1)}%; background:${LEVEL_COLORS[level]};"></span>
      </span>
    `;
    donutLegendEl.appendChild(li);
  }

  donutChartEl.onmousemove = (event) => {
    const hoveredLevel = detectHoveredDonutLevel(event, values);
    donutChartEl.style.background = `conic-gradient(${buildDonutGradient(values, hoveredLevel)})`;
    setLegendHighlight(hoveredLevel);
  };

  donutChartEl.onmouseleave = () => {
    donutChartEl.style.background = `conic-gradient(${buildDonutGradient(values)})`;
    setLegendHighlight(null);
  };

  updateExploreCta();

  syncNavigationState();
}

function updateExploreCta() {
  if (state.viewMode === "country") {
    exploreLabelEl.textContent = "Explore Map";
    if (exploreArrowEl) {
      exploreArrowEl.innerHTML = "&#8592;";
    }
    return;
  }

  exploreLabelEl.textContent =
    state.selectedCountry === "Total"
      ? "Explore Country"
      : `Explore ${displayCountry(state.selectedCountry)}`;
  if (exploreArrowEl) {
    exploreArrowEl.innerHTML = "&#8594;";
  }
}

function setViewMode(mode) {
  if (mode !== "overview" && mode !== "country") {
    return;
  }

  if (mode === "country" && state.selectedCountry === "Total") {
    const firstCountryCode = countries[0]?.country;
    if (firstCountryCode) {
      state.selectedCountry = firstCountryCode;
      countrySelectEl.value = firstCountryCode;
      countrySelectButtonEl.textContent = displayCountry(firstCountryCode);
      const optionButtons = countrySelectListEl.querySelectorAll(".country-select-option");
      for (const optionButton of optionButtons) {
        optionButton.setAttribute("aria-selected", optionButton.dataset.value === firstCountryCode ? "true" : "false");
      }
      renderLeftPanel();
      renderMap();
    }
  }

  state.viewMode = mode;
  applyViewModeState();
  updateExploreCta();
  renderMap();

  if (mode === "overview") {
    renderLeftPanel();
  }

  if (mode === "country") {
    renderCountryMode();
  }

  syncNavigationState();
  syncOverviewQuery();
}

function applyViewModeState() {
  layoutEl.classList.toggle("is-country-expanded", state.viewMode === "country");
  if (countryUnderlayEl) {
    countryUnderlayEl.setAttribute("aria-hidden", state.viewMode === "country" ? "false" : "true");
  }
  if (countryModeContentEl) {
    countryModeContentEl.setAttribute("aria-hidden", state.viewMode === "country" ? "false" : "true");
  }
  tooltipEl.style.opacity = "0";
}

function syncCountryUnderlayWidth() {
  if (!layoutEl || !panelEl) {
    return;
  }
  layoutEl.style.setProperty("--panel-underlay-width", `${panelEl.offsetWidth}px`);
}

function syncNavigationState() {
  overviewNavLinkEl.classList.toggle("active", state.viewMode === "overview");
  countryNavLinkEl.classList.toggle("active", state.viewMode === "country");
  overviewNavLinkEl.href = buildOverviewPageUrl("overview");
  countryNavLinkEl.href = buildOverviewPageUrl("country");
}

function buildOverviewPageUrl(viewMode) {
  const params = new URLSearchParams();
  if (state.selectedCountry !== "Total") {
    params.set("country", state.selectedCountry);
  }
  params.set("food", state.selectedFood);
  if (viewMode === "country") {
    params.set("view", "country");
  }
  const query = params.toString();
  return query ? `./overview.html?${query}` : "./overview.html";
}

function syncOverviewQuery() {
  const params = new URLSearchParams();
  if (state.selectedCountry !== "Total") {
    params.set("country", state.selectedCountry);
  }
  if (state.selectedFood) {
    params.set("food", state.selectedFood);
  }
  if (state.viewMode === "country") {
    params.set("view", "country");
  }
  const query = params.toString();
  const nextUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
  window.history.replaceState({}, "", nextUrl);
}

function renderCountryMode() {
  if (state.viewMode !== "country") {
    return;
  }

  const countryEntry = findCountryEntry(state.selectedCountry);
  if (!countryEntry || countryEntry.country === "Total") {
    if (window.d3 && countryChartEl) {
      window.d3.select(countryChartEl).selectAll("*").remove();
    }
    return;
  }

  const countryFoods = [...new Set(countryEntry.items.map((item) => item.food.trim()))].filter(Boolean);
  if (!countryFoods.length) {
    return;
  }

  if (!state.selectedFood || !countryFoods.includes(state.selectedFood)) {
    state.selectedFood = countryFoods[0];
    syncFoodPickerSelection();
  }

  drawCountryChart(countryEntry, countryFoods);
  clearCountrySummary();
  syncNavigationState();
  syncOverviewQuery();
}

function clearCountrySummary() {
  summaryTextEl.textContent = "";
}

function drawCountryChart(countryEntry, countryFoods) {
  const d3 = window.d3;
  if (!d3 || !countryChartEl) {
    return;
  }

  const width = 1000;
  const height = 1000;
  const centerX = width / 2;
  const centerY = height / 2;

  const svg = d3.select(countryChartEl);
  svg.selectAll("*").remove();

  const mainGroup = svg.append("g").attr("transform", `translate(${centerX},${centerY})`);

  const outerRadius = 360;
  const innerRadius = 58;
  const sectorGap = 0.02;
  const lineGap = 0.2;

  const allValues = countryEntry.items.map((item) => item.value).filter((value) => Number.isFinite(value));
  const dataMin = allValues.length ? Math.min(...allValues) : 0;
  const dataMax = allValues.length ? Math.max(...allValues) : 1;
  const minLineLength = (outerRadius - innerRadius) * 0.1;
  const maxLineLength = (outerRadius - innerRadius) * 0.9;

  const centerCircle = mainGroup
    .append("circle")
    .attr("r", innerRadius)
    .attr("fill", "#ece9e4")
    .attr("opacity", 0.98);

  const centerFoodLabel = mainGroup
    .append("text")
    .attr("class", "country-center-label")
    .attr("x", 0)
    .attr("y", 0);

  const centerGuidelineLabel = mainGroup
    .append("text")
    .attr("class", "country-center-guideline-label")
    .attr("x", 0)
    .attr("y", 20);

  const hoverValueLabelsGroup = mainGroup
    .append("g")
    .attr("class", "country-value-labels")
    .attr("pointer-events", "none");

  const setCenterFoodLabel = (food) => {
    if (!food) {
      centerFoodLabel.selectAll("tspan").remove();
      centerGuidelineLabel.text("");
      return;
    }

    const raw = displayFoodName(food || "").trim();
    const guidelineGroup = FOOD_GUIDELINE_GROUP[food] || "balance";
    const guidelineText = FOOD_GUIDELINE_LABEL[guidelineGroup] || "";
    const maxCharsPerLine = Math.max(8, Math.floor((innerRadius * 1.7) / 7));
    const words = raw.split(/\s+/).filter(Boolean);
    const lines = [];
    let currentLine = "";

    for (const word of words) {
      const candidate = currentLine ? `${currentLine} ${word}` : word;
      if (candidate.length <= maxCharsPerLine) {
        currentLine = candidate;
      } else {
        if (currentLine) {
          lines.push(currentLine);
        }
        currentLine = word;
      }
      if (lines.length === 2) {
        break;
      }
    }

    if (lines.length < 2 && currentLine) {
      lines.push(currentLine);
    }

    if (!lines.length && raw) {
      lines.push(raw);
    }

    const finalLines = lines.slice(0, 2);
    if (lines.length > 2 || raw.length > maxCharsPerLine * 2 + 2) {
      finalLines[finalLines.length - 1] = `${finalLines[finalLines.length - 1].replace(/\.*$/, "").slice(0, Math.max(1, maxCharsPerLine - 1))}…`;
    }

    centerFoodLabel.selectAll("tspan").remove();
    if (!finalLines.length) {
      centerGuidelineLabel.text(guidelineText);
      return;
    }

    const lineHeight = 16;
    const startDy = finalLines.length === 1 ? -8 : -lineHeight / 2 - 8;
    finalLines.forEach((line, index) => {
      centerFoodLabel
        .append("tspan")
        .attr("x", 0)
        .attr("dy", index === 0 ? startDy : lineHeight)
        .text(line);
    });

    centerGuidelineLabel.text(guidelineText);
  };

  const setFoodHoverState = (food) => {
    const allLines = mainGroup.selectAll(".food-line");
    if (!food) {
      allLines.attr("opacity", 0.72).attr("stroke-width", 4);
      return;
    }

    allLines
      .attr("opacity", function getOpacity() {
        return d3.select(this).attr("data-food") === food ? 1 : 0.2;
      })
      .attr("stroke-width", function getWidth() {
        return d3.select(this).attr("data-food") === food ? 5 : 3;
      });

    allLines
      .filter(function raiseActive() {
        return d3.select(this).attr("data-food") === food;
      })
      .raise();
  };

  const setHoverValueLabels = (food) => {
    hoverValueLabelsGroup.selectAll("*").remove();
    if (!food) {
      return;
    }

    mainGroup
      .selectAll(".food-line")
      .filter(function filterHoveredFood() {
        return d3.select(this).attr("data-food") === food;
      })
      .each(function appendValueLabel() {
        const line = d3.select(this);
        const x2 = Number(line.attr("x2"));
        const y2 = Number(line.attr("y2"));
        const value = Number(line.attr("data-value"));
        const length = Math.hypot(x2, y2) || 1;
        const ux = x2 / length;
        const uy = y2 / length;
        const labelOffset = 14;

        hoverValueLabelsGroup
          .append("text")
          .attr("class", "country-line-value-label")
          .attr("x", x2 + ux * labelOffset)
          .attr("y", y2 + uy * labelOffset)
          .attr("text-anchor", ux >= 0 ? "start" : "end")
          .text(`${value.toFixed(1)}%`);
      });

    hoverValueLabelsGroup.raise();
  };

  COUNTRY_QUADRANTS.forEach(({ level, color }, index) => {
    const sectorStart = -Math.PI / 2 + (index * Math.PI) / 2 + sectorGap;
    const sectorEnd = -Math.PI / 2 + ((index + 1) * Math.PI) / 2 - sectorGap;
    const sectorArc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(sectorStart)
      .endAngle(sectorEnd);

    const sectorGroup = mainGroup.append("g").attr("class", "country-sector").attr("data-level", level);
    const tone = d3.color(color);
    const sectorFill = tone ? `rgba(${tone.r}, ${tone.g}, ${tone.b}, 0.05)` : "rgba(0, 0, 0, 0.05)";

    sectorGroup
      .append("path")
      .attr("class", "country-sector-bg")
      .attr("d", sectorArc())
      .style("fill", sectorFill)
      .attr("stroke-width", 2)
      .attr("pointer-events", "none");

    const usableStart = sectorStart + lineGap;
    const usableEnd = sectorEnd - lineGap;
    const usableSpan = Math.max(0.001, usableEnd - usableStart);

    countryFoods.forEach((food, foodIndex) => {
      const item = countryEntry.items.find((datum) => datum.food.trim() === food && datum.level === level);
      const value = item ? item.value : 0;

      const t = countryFoods.length > 1 ? foodIndex / (countryFoods.length - 1) : 0.5;
      const angle = usableStart + t * usableSpan;

      const safeRatio = dataMax === dataMin ? 1 : (value - dataMin) / (dataMax - dataMin);
      const lineLength = Math.max(0, safeRatio) * (maxLineLength - minLineLength) + minLineLength;

      const [x1, y1] = d3.pointRadial(angle, innerRadius);
      const [x2, y2] = d3.pointRadial(angle, innerRadius + lineLength);

      const lineGroup = sectorGroup.append("g").attr("class", "food-line-group").attr("data-food", food);

      lineGroup
        .append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke", "transparent")
        .attr("stroke-width", 14)
        .attr("pointer-events", "stroke")
        .on("mouseover", () => {
          state.selectedFood = food;
          syncFoodPickerSelection();
          updateCountrySummary(countryEntry, food);
          syncNavigationState();
          syncOverviewQuery();
          setCenterFoodLabel(food);
          setHoverValueLabels(food);
          setFoodHoverState(food);
        })
        .on("mouseout", () => {
          clearCountrySummary();
          setCenterFoodLabel(null);
          setHoverValueLabels(null);
          setFoodHoverState(null);
        });

      lineGroup
        .append("line")
        .attr("class", "food-line")
        .attr("data-food", food)
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("data-value", value)
        .attr("stroke-width", 4)
        .style("stroke", color)
        .attr("stroke-linecap", "round")
        .attr("opacity", 0.72)
        .attr("pointer-events", "none");
    });
  });

  centerCircle.lower();
  centerFoodLabel.raise();

  setCenterFoodLabel(null);
  setHoverValueLabels(null);
  setFoodHoverState(null);
}

function updateCountrySummary(countryEntry, food) {
  const valuesByLevel = {};

  for (const level of COUNTRY_LEVEL_ORDER) {
    const hit = countryEntry.items.find((item) => item.food.trim() === food && item.level === level);
    valuesByLevel[level] = hit ? hit.value : 0;
  }

  const dominant = COUNTRY_LEVEL_ORDER.reduce(
    (best, level) => {
      if (valuesByLevel[level] > best.value) {
        return { level, value: valuesByLevel[level] };
      }
      return best;
    },
    { level: COUNTRY_LEVEL_ORDER[0], value: valuesByLevel[COUNTRY_LEVEL_ORDER[0]] || 0 },
  );

  summaryTextEl.textContent = buildSummarySentence(food, dominant);
}

function buildSummarySentence(food, dominant) {
  const levelText = String(dominant?.level || "").toLowerCase();
  const foodText = displayFoodName(food).toLowerCase();
  const share = Number(dominant?.value || 0).toFixed(1);
  const guidelineGroup = FOOD_GUIDELINE_GROUP[food] || "balance";
  const guidelineText = (FOOD_GUIDELINE_LABEL[guidelineGroup] || "To balance").toLowerCase();
  const recommendedRange = FOOD_RECOMMENDED_RANGE[food] || "N/A";
  return `The largest share ${share}% falls into the "${levelText}" category for ${foodText}, indicating ${levelText} adherence to the recommendations.\n\nRecommended range (${guidelineText}): ${recommendedRange}.`;
}

function syncFoodPickerSelection() {
  const inputs = foodPickerEl.querySelectorAll('input[name="food-choice"]');
  for (const input of inputs) {
    input.checked = input.value === state.selectedFood;
  }
}

function buildCountryDataByFood(food) {
  const map = new Map();

  for (const country of countries) {
    const values = getFoodLevelValues(country, food);
    map.set(country.country, {
      values,
      dominant: findDominant(values),
    });
  }

  return map;
}

function detectHoveredDonutLevel(event, values) {
  const rect = donutChartEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = event.clientX - centerX;
  const dy = event.clientY - centerY;

  const distance = Math.sqrt(dx * dx + dy * dy);
  const outerRadius = rect.width / 2;
  const innerRadius = outerRadius * 0.48;

  if (distance < innerRadius || distance > outerRadius) {
    return null;
  }

  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const donutAngle = (angle + 90 + 360) % 360;

  const total = LEVELS.reduce((sum, level) => sum + (values[level] || 0), 0);
  if (total <= 0) {
    return null;
  }

  let start = 0;
  for (const level of LEVELS) {
    const sweep = ((values[level] || 0) / total) * 360;
    const end = start + sweep;
    if (donutAngle >= start && donutAngle < end) {
      return level;
    }
    start = end;
  }

  return LEVELS[LEVELS.length - 1];
}

function setLegendHighlight(level) {
  const items = donutLegendEl.querySelectorAll("li");
  for (const item of items) {
    const isHit = Boolean(level) && item.dataset.level === level;
    item.classList.toggle("is-highlight", isHit);
    item.classList.toggle("is-muted", Boolean(level) && !isHit);
  }
}

function getFoodLevelValues(country, food) {
  const values = {};
  for (const level of LEVELS) {
    values[level] = findValue(country, food, level) ?? 0;
  }
  return values;
}

function findCountryEntry(code) {
  const exact = cases.find((c) => c.country === code);
  if (exact) {
    return exact;
  }
  return cases.find((c) => c.country === "Total") || null;
}

function findDominant(values) {
  let level = LEVELS[0];
  let value = values[level];

  for (let i = 1; i < LEVELS.length; i += 1) {
    const current = LEVELS[i];
    if (values[current] > value) {
      level = current;
      value = values[current];
    }
  }

  return { level, value };
}

function findValue(country, food, level) {
  const hit = country.items.find((item) => item.food.trim() === food && item.level === level);
  return hit ? hit.value : null;
}

function buildDonutGradient(values, hoveredLevel = null) {
  const total = LEVELS.reduce((sum, level) => sum + (values[level] || 0), 0);
  if (total <= 0) {
    return "#d9d6d1 0deg 360deg";
  }

  const segments = [];
  let start = 0;

  for (const level of LEVELS) {
    const angle = ((values[level] || 0) / total) * 360;
    const end = start + angle;
    let color = LEVEL_COLORS[level];
    if (hoveredLevel) {
      color = level === hoveredLevel ? color : hexToRgba(color, 0.62);
    }
    segments.push(`${color} ${start.toFixed(2)}deg ${end.toFixed(2)}deg`);
    start = end;
  }

  return segments.join(", ");
}

function hexToRgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, alpha)).toFixed(2)})`;
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const normalized = clean.length === 3 ? clean.split("").map((ch) => ch + ch).join("") : clean;
  const int = Number.parseInt(normalized, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function getFoods(countryList) {
  const seen = new Set();
  const list = [];

  for (const country of countryList) {
    for (const item of country.items) {
      const food = item.food.trim();
      if (!seen.has(food)) {
        seen.add(food);
        list.push(food);
      }
    }
  }

  return list;
}

function debounce(fn, wait) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

function displayCountry(code) {
  if (code === "Total") {
    return "Total";
  }
  return COUNTRY_META[code]?.name || code;
}

function displayFoodName(food) {
  const raw = (food || "").trim();
  return FOOD_DISPLAY_NAMES[raw] || raw;
}

function slug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
