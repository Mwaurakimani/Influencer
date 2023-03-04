select 
u.id as user_id,
i.id as influencer_id,
first_name,
last_name,
email, 
i.role,
i.price,
i.unit,
i.tags
FROM users u
JOIN influencers i on i.user_id = u.id;
