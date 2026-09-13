import re

with open('src/data/products.ts', 'r') as f:
    text = f.read()

# Map of product updates:
# id -> dict of field overrides or additions
updates = {
    'bb-g-001': {
        'occasions': "['special-occasion', 'birthday', 'gifting']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-b-001': {
        'occasions': "['everyday', 'special-occasion']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-b-002': {
        'occasions': "['everyday', 'special-occasion', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y']"
    },
    'bb-bb-001': {
        'occasions': "['gifting', 'special-occasion', 'birthday']",
        'ageGroups': "['0-12M']"
    },
    'bb-s-001': {
        'occasions': "['everyday', 'birthday']",
        'ageGroups': "['4-7Y', '8-12Y']"
    },
    'bb-a-001': {
        'occasions': "['everyday', 'special-occasion', 'birthday', 'gifting']",
        'ageGroups': "['4-7Y', '8-12Y', 'all-ages']"
    },
    'bb-t-001': {
        'occasions': "['birthday', 'gifting', 'special-occasion']",
        'ageGroups': "['1-3Y', '4-7Y']"
    },
    'bb-gft-001': {
        'occasions': "['birthday', 'gifting', 'special-occasion']",
        'ageGroups': "['0-12M', '1-3Y', '4-7Y', '8-12Y', 'all-ages']"
    },
    'bb-g-002': {
        'occasions': "['special-occasion', 'everyday', 'birthday']",
        'ageGroups': "['4-7Y', '8-12Y']"
    },
    'bb-b-003': {
        'occasions': "['special-occasion', 'birthday', 'gifting']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-bb-002': {
        'occasions': "['everyday', 'gifting', 'birthday']",
        'ageGroups': "['0-12M', '1-3Y']"
    },
    'bb-t-002': {
        'occasions': "['birthday', 'gifting', 'everyday']",
        'ageGroups': "['0-12M', '1-3Y', '4-7Y']"
    },
    'bb-a-002': {
        'occasions': "['everyday', 'special-occasion', 'gifting']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-001': {
        'occasions': "['special-occasion', 'birthday', 'gifting']",
        'ageGroups': "['1-3Y', '4-7Y']"
    },
    'bb-na-002': {
        'occasions': "['special-occasion', 'birthday', 'gifting']",
        'ageGroups': "['4-7Y', '8-12Y']"
    },
    'bb-na-003': {
        'occasions': "['everyday', 'gifting', 'birthday']",
        'ageGroups': "['4-7Y', '8-12Y', 'all-ages']"
    },
    'bb-na-004': {
        'occasions': "['everyday', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y']"
    },
    'bb-na-005': {
        'occasions': "['everyday', 'birthday']",
        'ageGroups': "['4-7Y', '8-12Y']"
    },
    'bb-na-006': {
        'occasions': "['everyday', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-007': {
        'occasions': "['everyday', 'special-occasion', 'gifting']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-008': {
        'occasions': "['everyday', 'special-occasion', 'gifting']",
        'ageGroups': "['4-7Y', '8-12Y']"
    },
    'bb-na-009': {
        'occasions': "['everyday', 'birthday', 'special-occasion']",
        'ageGroups': "['4-7Y', '8-12Y']"
    },
    'bb-na-010': {
        'occasions': "['everyday', 'special-occasion', 'birthday']",
        'ageGroups': "['4-7Y', '8-12Y']"
    },
    'bb-na-011': {
        'occasions': "['everyday', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-012': {
        'occasions': "['everyday', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-013': {
        'occasions': "['everyday', 'special-occasion', 'gifting', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-014': {
        'occasions': "['special-occasion', 'gifting', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-015': {
        'occasions': "['everyday', 'special-occasion', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-016': {
        'occasions': "['everyday', 'special-occasion', 'birthday']",
        'ageGroups': "['4-7Y', '8-12Y']"
    },
    'bb-na-017': {
        'occasions': "['special-occasion', 'gifting', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-018': {
        'occasions': "['everyday', 'gifting', 'special-occasion', 'birthday']",
        'ageGroups': "['4-7Y', '8-12Y', 'all-ages']"
    },
    'bb-na-019': {
        'occasions': "['everyday', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-020': {
        'occasions': "['everyday', 'special-occasion', 'birthday']",
        'ageGroups': "['4-7Y', '8-12Y']"
    },
    'bb-na-021': {
        'occasions': "['everyday', 'special-occasion', 'birthday', 'gifting']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    },
    'bb-na-022': {
        'occasions': "['gifting', 'special-occasion', 'birthday']",
        'ageGroups': "['0-12M', '1-3Y']"
    },
    'bb-na-023': {
        'occasions': "['everyday', 'special-occasion', 'birthday']",
        'ageGroups': "['1-3Y', '4-7Y', '8-12Y']"
    }
}

for pid, data in updates.items():
    # Find block for this pid
    pattern = rf"(id:\s*'{pid}',.*?)(occasions:\s*\[[^\]]*\],?\s*)(ageGroup:\s*'[^']+',?\s*)"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        occ_rep = f"occasions: {data['occasions']},\n"
        age_rep = f"{match.group(3)}    ageGroups: {data['ageGroups']},\n"
        replacement = match.group(1) + occ_rep + age_rep
        text = text[:match.start()] + replacement + text[match.end():]
        print(f"Updated {pid}")
    else:
        print(f"Could not match {pid}")

with open('src/data/products.ts', 'w') as f:
    f.write(text)

print("Enrichment complete!")
