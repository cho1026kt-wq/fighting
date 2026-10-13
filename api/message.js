// Vercel 서버리스 함수: 응원 문장 하나를 골라 이름과 함께 돌려준다.
const MESSAGES = [
  "{name}, 오늘도 여기까지 온 것만으로 충분히 잘하고 있어요!",
  "{name}의 작은 한 걸음이 내일의 큰 변화를 만들어요.",
  "{name}, 조금 느려도 괜찮아요. 멈추지 않는 게 중요하니까요.",
  "오늘 하루도 {name}답게 빛나길 응원해요!",
  "{name}, 실수는 배우고 있다는 증거예요. 계속 나아가요!",
  "{name}의 노력은 반드시 어딘가에 쌓이고 있어요.",
  "힘든 날도 지나가요. {name}, 오늘은 스스로를 꼭 안아 주세요.",
  "{name}, 지금 이 순간에도 충분히 멋진 사람이에요.",
  "{name}의 웃음이 누군가에게는 큰 힘이 된답니다.",
  "{name}, 어제보다 조금 나아졌다면 그걸로 대성공이에요!",
  "{name}, 오늘 할 수 있는 만큼만 해도 정말 잘한 거예요.",
  "{name}의 꿈은 생각보다 가까이 와 있어요. 힘내요!",
  "{name}, 쉬어 가는 것도 앞으로 가는 방법 중 하나예요.",
  "누구보다 {name}을(를) 믿어요. 오늘도 파이팅!",
  "{name}, 당신이 걸어온 길이 이미 충분히 대단해요."
];

module.exports = (req, res) => {
  const raw = typeof req.query?.name === "string" ? req.query.name : "";
  const name = raw.trim().slice(0, 20) || "여러분";
  const template = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ message: template.replaceAll("{name}", name) });
};
